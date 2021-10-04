import { Button } from "@material-ui/core";
import React from "react";

import { TO_LOGIN_PAGE, TO_REGISTER_PAGE } from "src/utils/constants";
import EnhancedLink from "../Link";
import { useGuestStyles } from "./styles";

const GuestSection: React.FC = () => {
  const classes = useGuestStyles();

  return (
    <>
      <EnhancedLink href={TO_LOGIN_PAGE}>
        <Button
          className={classes.button}
          color="default"
          variant="text"
          size="large"
          disableElevation
        >
          Login
        </Button>
      </EnhancedLink>
      <EnhancedLink href={TO_REGISTER_PAGE}>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          size="large"
          disableElevation
        >
          Signup
        </Button>
      </EnhancedLink>
    </>
  );
};

export default GuestSection;
