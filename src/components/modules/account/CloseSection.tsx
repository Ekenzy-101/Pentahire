import { Button, Typography } from "@material-ui/core";
import React from "react";

import AccountSection from "./AccountSection";
import { useSectionStyles } from "./styles";

const AccountCloseSection = () => {
  const classes = useSectionStyles();
  return (
    <AccountSection
      description={
        <>
          <Typography className={classes.title} color="error" variant="h6">
            Close Account
          </Typography>
          <Typography>
            You must delete all apps on this account first. Warning: Closing
            your account is irreversible.
          </Typography>
        </>
      }
      content={
        <Button className={classes.closeAccountBtn}>
          Close this account...
        </Button>
      }
    />
  );
};

export default AccountCloseSection;
