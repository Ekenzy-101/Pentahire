import { AxiosError } from "axios";
import { CircularProgress } from "@material-ui/core";
import { Color } from "@material-ui/lab";
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
} from "src/components/common/form";
import LoadingPage from "src/components/common/LoadingPage";
import EnhancedPaper from "src/components/common/Paper";
import SEO from "src/components/common/SEO";
import { useRedirectedRoute } from "src/hooks";
import { isObject, userResolver } from "src/services/validations";
import { resetPassword } from "src/services/api/auth";
import { COMPANY_NAME, TO_LOGIN_PAGE } from "src/utils/constants";
import { FormValues } from "src/utils/types";

const ResetPasswordPage = () => {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<Color>("error");

  const { mutateAsync, isLoading } = useMutation(resetPassword);
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
    defaultValues: { confirmPassword: "", password: "" },
    resolver: userResolver,
  });
  const { loading } = useRedirectedRoute();

  const onResetPassword = async ({ password }: FormValues) => {
    try {
      const { data, status } = await mutateAsync({
        password,
        token: router.query.token as string,
      });
      if (status === 200) {
        client.setQueryData("authUser", { user: data.user });
        return;
      }

      setSeverity("success");
      setMessage(
        "Password reset was successful. We are redirecting you to the login page in 3 seconds"
      );
      setTimeout(() => {
        router.push(TO_LOGIN_PAGE);
      }, 3000);
    } catch (err) {
      const error = err as AxiosError;
      const errors = error.response?.data;
      if (errors && isObject(errors)) {
        if (errors.message) {
          setMessage(errors.message);
          return;
        }

        setError("password", { message: errors.password });
        setMessage(errors.token);
        return;
      }

      setMessage(error.message);
    }
  };

  return (
    <>
      <SEO title={`Reset Password - ${COMPANY_NAME}`} />
      {loading ? (
        <LoadingPage />
      ) : (
        <EnhancedPaper>
          <Header />
          <FormContainer>
            <Form onSubmit={handleSubmit(onResetPassword)}>
              <CustomAlert
                message={message}
                onClose={() => setMessage("")}
                open={Boolean(message)}
                severity={severity}
              />
              <FormLegend>Reset Password</FormLegend>
              <FormTextField
                errors={errors}
                label="New password"
                name="password"
                register={register}
                type="password"
              />
              <FormTextField
                errors={errors}
                label="Confirm your password"
                name="confirmPassword"
                register={register}
                type="password"
              />
              <FormButton disabled={isLoading}>
                {isLoading ? (
                  <CircularProgress size={25} color="primary" />
                ) : (
                  "Reset Password"
                )}
              </FormButton>
            </Form>
          </FormContainer>
        </EnhancedPaper>
      )}
    </>
  );
};

export default ResetPasswordPage;
