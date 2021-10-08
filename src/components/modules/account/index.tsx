import { Container, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

import AccountCloseSection from "./CloseSection";
import TwoFactorAuthSection from "./TwoFactorAuthSection";
import AccountPasswordSection from "./PasswordSection";
import AccountProfileSection from "./ProfileSection";

const useStyles = makeStyles(
  () => ({
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      paddingBottom: "40px",
      paddingTop: "40px",
    },
  }),
  { index: 1 }
);

const AccountBody = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
      <AccountProfileSection />
      <Divider />
      <AccountPasswordSection />
      <Divider />
      <TwoFactorAuthSection />
      <Divider />
      <AccountCloseSection />
    </Container>
  );
};

export default AccountBody;
