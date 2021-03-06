import { AxiosError } from "axios";
import { CircularProgress, TextField, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

import CustomAlert from "src/components/common/alert";
import Header from "src/components/common/header";
import {
  Form,
  FormButton,
  FormContainer,
  FormTextField,
  FormLegend,
  FormLink,
} from "src/components/common/form";
import EnhancedPaper from "src/components/common/Paper";
import LoadingPage from "src/components/common/LoadingPage";
import SEO from "src/components/common/SEO";
import { useRedirectedRoute, usePrefetchPage, useSuccess } from "src/hooks";
import { loginUser, verifyLogin } from "src/services/api";
import {
  displayErrorMessages,
  userResolver,
  validateCode,
} from "src/services/validations";
import {
  COMPANY_NAME,
  TO_FORGOT_PASSWORD_PAGE,
  TO_HOME_PAGE,
  TO_REGISTER_PAGE,
} from "src/utils/constants";
import { FormValues, User } from "src/utils/types";
import { isObject } from "src/utils/helpers";

const LoginPage = () => {
  const [finalStep, setFinalStep] = useState(false);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    setError,
    watch,
  } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { email: "", password: "" },
    resolver: userResolver,
  });
  const { mutateAsync: mutateLoginAsync, isLoading: isLoggingInUser } =
    useMutation(loginUser);
  const { mutateAsync, isLoading } = useMutation(verifyLogin);
  const client = useQueryClient();
  const router = useRouter();
  const nextPath = router.query.next as string | undefined;
  usePrefetchPage(nextPath || TO_HOME_PAGE);
  const { loading } = useRedirectedRoute(nextPath);
  useSuccess();

  const onLoginUser = async (formData: FormValues) => {
    try {
      const { status, data } = await mutateLoginAsync(formData);
      if (status === 204) {
        setFinalStep(true);
        return;
      }
      client.setQueryData("authUser", { user: data.user as User });
    } catch (err) {
      const error = err as AxiosError;
      displayErrorMessages({ error, formData, setError, setMessage });
    }
  };

  const handleCancel = () => {
    setMessage("");
    setFinalStep(false);
    reset(
      { email: "", password: "" },
      { keepErrors: false, keepValues: false }
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCode = event.target.value;
    const isValidCode = newCode ? true : validateCode(newCode);
    setCode((prevCode) => (isValidCode ? newCode : prevCode));
  };

  const handleVerifyLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const { data } = await mutateAsync({ email: getValues("email"), code });
      client.setQueryData("authUser", { user: data.user as User });
    } catch (err) {
      const error = err as AxiosError;
      const errors = error.response?.data;
      if (isObject(errors)) {
        setMessage(errors.message);
        return;
      }

      setMessage(error.message);
    }
  };

  return (
    <>
      <SEO title={`Login - ${COMPANY_NAME}`} />
      {loading ? (
        <LoadingPage />
      ) : (
        <EnhancedPaper>
          <Header />
          <FormContainer>
            {finalStep ? (
              <Form onSubmit={handleVerifyLogin}>
                <CustomAlert
                  message={message}
                  open={Boolean(message)}
                  onClose={() => setMessage("")}
                  severity={"error"}
                />
                <FormLegend>Two-factor authentication</FormLegend>
                <Typography
                  style={{ margin: "0.3rem auto 1rem auto" }}
                  variant="body1"
                >
                  Your account is secured using two factor authentication (2FA).
                  To finish signing in, please enter the 6-digit verification
                  code generated by your authenticator app.
                </Typography>
                <Typography
                  style={{ margin: "auto auto 1rem auto" }}
                  variant="body1"
                >
                  <strong>Email address: </strong>{" "}
                  {watch("email") || "test@gamil.com"}
                </Typography>
                <TextField
                  fullWidth
                  label="2FA code"
                  onChange={handleChange}
                  size="small"
                  style={{ marginBottom: "2rem" }}
                  value={code}
                  variant="outlined"
                />
                <FormButton disabled={isLoading}>
                  {isLoading ? (
                    <CircularProgress size={25} color="primary" />
                  ) : (
                    "Submit"
                  )}
                </FormButton>
                <Typography
                  style={{ textAlign: "center", cursor: "pointer" }}
                  onClick={handleCancel}
                  color="primary"
                >
                  Cancel
                </Typography>
              </Form>
            ) : (
              <Form onSubmit={handleSubmit(onLoginUser)}>
                <CustomAlert
                  message={message}
                  open={Boolean(message)}
                  onClose={() => setMessage("")}
                  severity="error"
                />
                <FormLegend>Welcome Back</FormLegend>
                <FormTextField
                  register={register}
                  name="email"
                  errors={errors}
                />
                <FormTextField
                  register={register}
                  name="password"
                  errors={errors}
                  type="password"
                />
                <FormLink
                  href={TO_FORGOT_PASSWORD_PAGE}
                  linkText={"Forgot Password"}
                />
                <FormButton disabled={isLoggingInUser}>
                  {isLoggingInUser ? (
                    <CircularProgress size={25} color="primary" />
                  ) : (
                    "Login"
                  )}
                </FormButton>
                <FormLink
                  href={TO_REGISTER_PAGE}
                  linkText={"Register"}
                  text={"Don't have an account"}
                />
              </Form>
            )}
          </FormContainer>
        </EnhancedPaper>
      )}
    </>
  );
};

export default LoginPage;
