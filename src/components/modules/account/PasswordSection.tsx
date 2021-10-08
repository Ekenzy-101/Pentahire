import { Typography } from "@material-ui/core";
import React from "react";

import { Form, FormButton, FormTextField } from "src/components/common/form";
import AccountSection from "./AccountSection";
import PasswordInfo from "../PasswordInfo";
import { useSectionStyles } from "./styles";

const AccountPasswordSection = () => {
  const classes = useSectionStyles();
  return (
    <AccountSection
      description={
        <Typography className={classes.title} color="primary" variant="h6">
          Password
        </Typography>
      }
      content={
        <Form>
          <FormTextField
            className={classes.textField}
            name="email"
            label="Old Password"
            errors={{}}
          />
          <br />
          <FormTextField
            className={classes.textField}
            name="firstname"
            label="New Password"
            errors={{}}
          />
          <PasswordInfo />
          <FormTextField
            className={classes.textField}
            name="lastname"
            label="Confirm New Password"
            errors={{}}
          />
          <FormButton>Change Password</FormButton>
        </Form>
      }
    />
  );
};

export default AccountPasswordSection;
