import { AxiosError } from "axios";
import { CircularProgress, Typography } from "@material-ui/core";
import { Color } from "@material-ui/lab";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import CustomAlert from "src/components/common/alert";
import Header from "src/components/common/header";
import {
  Form,
  FormButton,
  FormContainer,
  FormTextField,
} from "src/components/common/form";
import EnhancedPaper from "src/components/common/Paper";
import LoadingPage from "src/components/common/LoadingPage";
import SEO from "src/components/common/SEO";
import { usePrefetchPage } from "src/hooks";
import { userResolver } from "src/services/validations";
import { sendVerifyEmailNotification, verifyEmail } from "src/services/api";
import { COMPANY_NAME, TO_HOME_PAGE } from "src/utils/constants";
import { isObject } from "src/utils/helpers";
import { FormValues } from "src/utils/types";

const VerifyEmailPage = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<Color>("error");

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
  const { isLoading, mutateAsync } = useMutation(sendVerifyEmailNotification);
  usePrefetchPage(TO_HOME_PAGE);
  const router = useRouter();
  const token = router.query.token as string;

  useEffect(() => {
    if (token) {
      verifyEmail({ token })
        .then(() => {
          router.push({
            pathname: TO_HOME_PAGE,
            query: { success: "Email verification was successful" },
          });
        })
        .catch((error: AxiosError) => {
          const errors = error.response?.data;
          setLoading(false);
          if (isObject(errors)) {
            setMessage(errors.message);
            return;
          }

          setMessage(error.message);
        });
    }
  }, [token]);

  const onSendVerifyEmailNotification = async ({ email }: FormValues) => {
    try {
      await mutateAsync({ email });
      setSeverity("success");
      setMessage("Mail has been sent successfully");
    } catch (err) {
      setSeverity("error");
      const error = err as AxiosError;
      const errors = error.response?.data;
      if (isObject(errors)) {
        setMessage(errors.message);
        setError("email", { message: errors.email });
        return;
      }

      setMessage(error.message);
    }
  };

  return (
    <>
      <SEO title={`Verify Email - ${COMPANY_NAME}`} />
      {loading ? (
        <LoadingPage />
      ) : (
        <EnhancedPaper>
          <Header />
          <FormContainer>
            <Form onSubmit={handleSubmit(onSendVerifyEmailNotification)}>
              <CustomAlert
                message={message}
                open={Boolean(message)}
                onClose={() => setMessage("")}
                severity={severity}
              />
              <Typography style={{ margin: "0.3rem auto" }} variant="body1">
                Oops it looks like something has gone wrong. Either the token
                has expired or is invalid. Please try resending the verification
                email
              </Typography>
              <FormTextField register={register} name="email" errors={errors} />
              <FormButton disabled={isLoading}>
                {isLoading ? (
                  <CircularProgress size={25} color="primary" />
                ) : (
                  "Resend Verification Link"
                )}
              </FormButton>
            </Form>
          </FormContainer>
        </EnhancedPaper>
      )}
    </>
  );
};

export default VerifyEmailPage;
