import { AxiosError } from "axios";
import { CircularProgress } from "@material-ui/core";
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
import { useRedirectedRoute, usePrefetchPage } from "src/hooks";
import { loginUser } from "src/services/api";
import { displayErrorMessages, userResolver } from "src/services/validations";
import {
  COMPANY_NAME,
  TO_FORGOT_PASSWORD_PAGE,
  TO_HOME_PAGE,
  TO_REGISTER_PAGE,
} from "src/utils/constants";
import { FormValues, User } from "src/utils/types";

const LoginPage = () => {
  const [message, setMessage] = useState("");

  const { mutateAsync: mutateLoginAsync, isLoading: isLoggingInUser } =
    useMutation(loginUser);
  const client = useQueryClient();
  const router = useRouter();
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { email: "", password: "" },
    resolver: userResolver,
  });

  const nextPath = router.query.next as string | undefined;
  const { loading } = useRedirectedRoute(nextPath);
  usePrefetchPage(nextPath || TO_HOME_PAGE);

  const onLoginUser = async (formData: FormValues) => {
    try {
      const { data } = await mutateLoginAsync(formData);
      client.setQueryData("authUser", { user: data.user as User });
    } catch (err) {
      const error = err as AxiosError;
      displayErrorMessages({ error, formData, setError, setMessage });
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
            <Form onSubmit={handleSubmit(onLoginUser)}>
              <CustomAlert
                message={message}
                open={Boolean(message)}
                onClose={() => setMessage("")}
                severity="error"
              />
              <FormLegend>Welcome Back</FormLegend>
              <FormTextField register={register} name="email" errors={errors} />
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
          </FormContainer>
        </EnhancedPaper>
      )}
    </>
  );
};

export default LoginPage;
