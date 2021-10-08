import { Avatar, Box, Typography } from "@material-ui/core";
import React from "react";

import { Form, FormButton, FormTextField } from "src/components/common/form";
import { DEFAULT_USER_IMAGE_URL } from "src/utils/constants";
import AccountSection from "./AccountSection";
import { useSectionStyles } from "./styles";

const AccountProfileSection = () => {
  const classes = useSectionStyles();
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
          <Form>
            <FormTextField
              className={classes.textField}
              name="email"
              errors={{}}
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
              errors={{}}
            />
            <FormTextField
              className={classes.textField}
              name="lastname"
              errors={{}}
            />
            <FormButton>Edit Profile</FormButton>
          </Form>
        </>
      }
    />
  );
};

export default AccountProfileSection;
