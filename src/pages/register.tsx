import { AxiosError } from "axios";
import { CircularProgress, Paper } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import HCaptcha from "@hcaptcha/react-hcaptcha";

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
import SEO from "src/components/common/SEO";
import { registerUser, sendVerifyEmailNotification } from "src/services/api";
import { isObject, userResolver } from "src/services/validations";
import { COMPANY_NAME, TO_LOGIN_PAGE } from "src/utils/constants";
import { FormValues } from "src/utils/types";
import { useAuthUser } from "src/hooks";

const RegisterPage = () => {
  const [message, setMessage] = useState("");
  const recaptchaRef = useRef<HCaptcha>(null);

  const { user } = useAuthUser();
  const client = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(sendVerifyEmailNotification);
  const { mutateAsync: mutateRegisterAsync, isLoading: isRegisteringUser } =
    useMutation(registerUser);
  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    setError,
    watch,
  } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      confirmPassword: "",
      password: "",
      firstname: "",
      lastname: "",
    },
    resolver: userResolver,
  });

  const handleResendEmail = async () => {
    try {
      await mutateAsync({ email: getValues("email") });
    } catch (err) {
      const error = err as AxiosError;
      const errors = error.response?.data;

      if (errors && isObject(errors)) {
        if (errors.message) {
          setMessage(errors.message);
          return;
        }

        setMessage(errors.email);
        return;
      }
      setMessage(error.message);
    }
  };

  const onRegisterUser = async (hcaptcha_token: string) => {
    const formData = getValues();
    try {
      if (!hcaptcha_token)
        throw new Error("Please verify that you are a human");

      const { user } = await mutateRegisterAsync({
        ...formData,
        hcaptcha_token,
      });
      client.setQueryData("authUser", { user });
    } catch (err) {
      const error = err as AxiosError;
      const fields = Object.keys(formData);
      const errors = error.response?.data;

      if (errors && isObject(errors)) {
        if (errors.message) {
          setMessage(errors.message);
          return;
        }

        Object.keys(errors).forEach((errorKey) => {
          if (fields.includes(errorKey)) {
            setError(errorKey as keyof FormValues, {
              message: errors[errorKey],
            });
          }
        });
        return;
      }
      setMessage(error.message);
    } finally {
      recaptchaRef.current?.resetCaptcha();
    }
  };

  const onSubmit = () => {
    recaptchaRef.current?.execute();
  };

  return (
    <EnhancedPaper>
      <SEO title={`Register - ${COMPANY_NAME}`} />
      <Header />
      <FormContainer>
        {user ? (
          <Paper variant="elevation" style={{ padding: "1rem" }} elevation={2}>
            <Form onSubmit={handleResendEmail}>
              <CustomAlert
                message={message}
                open={Boolean(message)}
                onClose={() => setMessage("")}
                severity={"error"}
              />
              <FormLegend variant="h6">Verify your email address</FormLegend>
              <FormLegend
                style={{ margin: "0.3rem auto 2rem auto" }}
                variant="body1"
              >
                An email containing verification instructions was sent to
                <strong> {watch("email")}.</strong> If you have not received a
                mail check your spam settings or check the spelling of your
                email address.
              </FormLegend>
              <FormButton disabled={isLoading}>
                {isLoading ? (
                  <CircularProgress size={25} color="primary" />
                ) : (
                  "Resend Email"
                )}
              </FormButton>
            </Form>
          </Paper>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <CustomAlert
              message={message}
              open={Boolean(message)}
              onClose={() => setMessage("")}
              severity="error"
            />
            <FormLegend>Let's get started</FormLegend>
            <FormTextField
              register={register}
              name="firstname"
              errors={errors}
            />
            <FormTextField
              register={register}
              name="lastname"
              errors={errors}
            />
            <FormTextField register={register} name="email" errors={errors} />
            <FormTextField
              errors={errors}
              name="password"
              register={register}
              type="password"
            />
            <FormTextField
              errors={errors}
              label="Confirm Password"
              name="confirmPassword"
              register={register}
              type="password"
            />
            <HCaptcha
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
              size="invisible"
              onError={setMessage}
              onExpire={() => setMessage("Token has expired. Please try again")}
              onVerify={onRegisterUser}
            />
            <FormButton disabled={isRegisteringUser}>
              {isRegisteringUser ? (
                <CircularProgress size={25} color="primary" />
              ) : (
                "Register"
              )}
            </FormButton>
            <FormLink
              linkText={"Login"}
              href={TO_LOGIN_PAGE}
              text={"Already have an account?"}
            />
          </Form>
        )}
      </FormContainer>
    </EnhancedPaper>
  );
};

export default RegisterPage;
