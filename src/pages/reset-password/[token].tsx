import { AxiosError } from "axios";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

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
import { resetPassword } from "src/services/api";
import { displayErrorMessages, userResolver } from "src/services/validations";
import { COMPANY_NAME, TO_LOGIN_PAGE } from "src/utils/constants";
import { FormValues } from "src/utils/types";

const ResetPasswordPage = () => {
  const [message, setMessage] = useState("");

  const { mutateAsync, isPending } = useMutation({ mutationFn: resetPassword });
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

  const onResetPassword = async (formData: FormValues) => {
    try {
      await mutateAsync({
        password: formData.password,
        token: router.query.token as string,
      });
      router.push({
        pathname: TO_LOGIN_PAGE,
        query: { success: "Password reset was successful" },
      });
    } catch (err) {
      const error = err as AxiosError<any>;
      displayErrorMessages({ error, formData, setError, setMessage });
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
                severity={"error"}
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
              <FormButton disabled={isPending}>
                {isPending ? (
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
