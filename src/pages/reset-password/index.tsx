import { AxiosError } from "axios";
import { CircularProgress, Typography } from "@material-ui/core";
import { Color } from "@material-ui/lab";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

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
import LoadingPage from "src/components/common/LoadingPage";
import EnhancedPaper from "src/components/common/Paper";
import SEO from "src/components/common/SEO";
import { useRedirectedRoute } from "src/hooks";
import { sendForgotPasswordNotification } from "src/services/api";
import { displayErrorMessages, userResolver } from "src/services/validations";
import { FormValues } from "src/utils/types";
import {
  COMPANY_NAME,
  TO_LOGIN_PAGE,
  TO_REGISTER_PAGE,
} from "src/utils/constants";

const ForgotPasswordPage = () => {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<Color>("error");

  const { isLoading, mutateAsync } = useMutation(
    sendForgotPasswordNotification
  );
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { email: "" },
    resolver: userResolver,
  });
  const { loading } = useRedirectedRoute();

  const handleCloseAlert = () => {
    setMessage("");
    setSeverity("error");
  };

  const onSendResetPasswordNotification = async (formData: FormValues) => {
    try {
      const {
        data: { message },
      } = await mutateAsync({ email: formData.email });
      setMessage(message);
      setSeverity("success");
    } catch (err) {
      const error = err as AxiosError;
      displayErrorMessages({ error, formData, setError, setMessage });
    }
  };

  return (
    <>
      <SEO title={`Forgot Password - ${COMPANY_NAME}`} />
      {loading ? (
        <LoadingPage />
      ) : (
        <EnhancedPaper>
          <Header />
          <FormContainer>
            <Form onSubmit={handleSubmit(onSendResetPasswordNotification)}>
              <CustomAlert
                message={message}
                open={Boolean(message)}
                onClose={handleCloseAlert}
                severity={severity}
              />
              <FormLegend>Forgot Password</FormLegend>
              <Typography style={{ marginBottom: "0.5rem" }}>
                Please enter the email you registered your account with and we
                will email you a link where you can reset your password.
              </Typography>
              <FormTextField register={register} name="email" errors={errors} />
              <FormButton disabled={isLoading}>
                {isLoading ? (
                  <CircularProgress size={25} color="primary" />
                ) : (
                  "Send Reset Link"
                )}
              </FormButton>
              <FormLink
                linkText={"Login"}
                href={TO_LOGIN_PAGE}
                text={"Remember your password ?"}
              />
              <FormLink
                linkText={"Register"}
                href={TO_REGISTER_PAGE}
                text={"Don't have an account?"}
              />
            </Form>
          </FormContainer>
        </EnhancedPaper>
      )}{" "}
    </>
  );
};

export default ForgotPasswordPage;
