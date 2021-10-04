import { AppBar, Toolbar, Avatar, Box } from "@material-ui/core";
import React from "react";

import {
  COMPANY_LOGO_URL,
  COMPANY_NAME,
  TO_HOME_PAGE,
} from "src/utils/constants";
import { useAuthUser } from "src/hooks";
import { useStyles } from "./styles";
import GuestSection from "./guest";
import AuthSection from "./auth";
import EnhancedLink from "../Link";

const Header: React.FC = () => {
  const classes = useStyles();
  const { user } = useAuthUser();

  return (
    <AppBar className={classes.appbar} position="sticky" variant="outlined">
      <Toolbar className={classes.toolbar}>
        <EnhancedLink href={TO_HOME_PAGE}>
          <Avatar
            alt={COMPANY_NAME}
            className={classes.logo}
            src={COMPANY_LOGO_URL}
            variant="rounded"
          />
        </EnhancedLink>
        <Box marginLeft="auto" display="flex" alignItems="center">
          {!user ? <GuestSection /> : <AuthSection />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
