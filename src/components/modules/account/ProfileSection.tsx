import { Avatar, Box, CircularProgress, Typography } from "@material-ui/core";
import { AxiosError } from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";

import CustomAlert from "src/components/common/alert";
import { Form, FormButton, FormTextField } from "src/components/common/form";
import { useAuthUser } from "src/hooks";
import { updateProfile } from "src/services/api";
import { displayErrorMessages, userResolver } from "src/services/validations";
import { DEFAULT_USER_IMAGE_URL } from "src/utils/constants";
import { FormValues, User } from "src/utils/types";
import AccountSection from "./AccountSection";
import { useSectionStyles } from "./styles";

const AccountProfileSection = () => {
  const [message, setMessage] = useState("");

  const { user } = useAuthUser() as { user: User };
  const { isLoading, mutateAsync } = useMutation(updateProfile);
  const client = useQueryClient();
  const classes = useSectionStyles();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
  } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
    },
    resolver: userResolver,
  });

  const onUpdateProfile = async (formData: FormValues) => {
    try {
      const { email, firstname, lastname } = formData;
      await mutateAsync({ email, firstname, lastname });

      client.setQueryData<{ user: User | null }>("authUser", (previousData) => {
        if (!previousData) return { user: null };

        return { user: { ...previousData.user!, email, firstname, lastname } };
      });
      toast.success("Profile updated successfully");
    } catch (err) {
      const error = err as AxiosError;
      displayErrorMessages({ error, formData, setError, setMessage });
    }
  };

  const keys = ["email", "firstname", "lastname"] as const;
  const disabled = watch(keys).every(
    (value, index) => value === user[keys[index]]
  );
  return (
    <AccountSection
      description={
        <Typography className={classes.title} color="primary" variant="h6">
          Profile
        </Typography>
      }
      content={
        <>
          <Box
            alignItems="center"
            display="flex"
            gridGap="1rem"
            marginBottom="1rem"
          >
            <Avatar
              className={classes.avatar}
              src={DEFAULT_USER_IMAGE_URL}
              variant="circular"
            />
            <Typography color="primary">Change Profile Picture</Typography>
          </Box>
          <Form onSubmit={handleSubmit(onUpdateProfile)}>
            <CustomAlert
              message={message}
              open={Boolean(message)}
              onClose={() => setMessage("")}
              severity="error"
            />
            <br />
            <FormTextField
              className={classes.textField}
              name="email"
              errors={errors}
              register={register}
            />
            <Typography
              color="textSecondary"
              component="p"
              style={{ margin: "-0.5rem 0 0.5rem 0" }}
              variant="caption"
            >
              Changing your email will require verifying it. If you enable two
              factor authentication, you won't be able to login
            </Typography>
            <FormTextField
              className={classes.textField}
              name="firstname"
              errors={errors}
              register={register}
            />
            <FormTextField
              className={classes.textField}
              name="lastname"
              errors={errors}
              register={register}
            />
            <FormButton disabled={disabled || isLoading}>
              {isLoading ? (
                <CircularProgress size={25} color="primary" />
              ) : (
                "Update Profile"
              )}
            </FormButton>
          </Form>
        </>
      }
    />
  );
};

export default AccountProfileSection;
