import { AxiosError } from "axios";
import { CircularProgress, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

import CustomAlert from "src/components/common/alert";
import { Form, FormButton, FormTextField } from "src/components/common/form";
import { useSectionStyles } from "./styles";
import { userResolver } from "src/services/validations";
import { updatePassword } from "src/services/api";
import { isObject } from "src/utils/helpers";
import { FormValues } from "src/utils/types";
import AccountSection from "./AccountSection";
import PasswordInfo from "../../common/PasswordInfo";

const AccountPasswordSection = () => {
  const [message, setMessage] = useState("");
  const classes = useSectionStyles();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { oldPassword: "", password: "", confirmPassword: "" },
    resolver: userResolver,
  });
  const { mutateAsync, isLoading } = useMutation(updatePassword);

  const onUpdatePassword = async ({ oldPassword, password }: FormValues) => {
    try {
      await mutateAsync({ old_password: oldPassword, new_password: password });
      toast.success("Password updated successfully");
    } catch (err) {
      const error = err as AxiosError;
      const errors = error.response?.data;
      if (isObject(errors)) {
        setError("password", { message: errors.new_password });
        setError("oldPassword", { message: errors.old_password });
        setMessage(errors.message);
        return;
      }

      setMessage(error.message);
    }
  };

  const commonProps = {
    className: classes.textField,
    errors,
    register,
    type: "password",
  };

  return (
    <AccountSection
      description={
        <Typography className={classes.title} color="primary" variant="h6">
          Password
        </Typography>
      }
      content={
        <Form onSubmit={handleSubmit(onUpdatePassword)}>
          <CustomAlert
            message={message}
            open={Boolean(message)}
            onClose={() => setMessage("")}
            severity="error"
          />
          <FormTextField
            name="oldPassword"
            label="Old Password"
            {...commonProps}
          />
          <br />
          <FormTextField
            name="password"
            label="New Password"
            {...commonProps}
          />
          <PasswordInfo />
          <FormTextField
            name="confirmPassword"
            label="Confirm New Password"
            {...commonProps}
          />
          <FormButton disabled={isLoading}>
            {isLoading ? (
              <CircularProgress size={25} color="primary" />
            ) : (
              "Update Password"
            )}
          </FormButton>
        </Form>
      }
    />
  );
};

export default AccountPasswordSection;
