import { Avatar, Menu, MenuItem, Typography } from "@material-ui/core";
import React, { useCallback, useMemo, useState } from "react";
import { useMutation } from "react-query";

import {
  TO_ACCOUNT_PAGE,
  TO_BECOME_HOST_PAGE,
  TO_MESSAGES_PAGE,
  TO_TRIPS_ACTIVITY_PAGE,
  TO_TRIPS_BOOKING_PAGE,
  TO_TRIPS_HISTORY_PAGE,
  TO_SUPPORT_PAGE,
  TO_HOME_PAGE,
  TO_DRIVERS_PAGE,
  DEFAULT_USER_IMAGE_URL,
} from "src/utils/constants";
import { logoutUser } from "src/services/api";
import { useAuthUser } from "src/hooks";
import { User } from "src/utils/types";
import { useAuthStyles } from "./styles";
import EnhancedLink from "../Link";

const tripSections = [
  {
    label: "Activity",
    path: TO_TRIPS_ACTIVITY_PAGE,
  },
  {
    label: "Booked",
    path: TO_TRIPS_BOOKING_PAGE,
  },
  {
    label: "History",
    path: TO_TRIPS_HISTORY_PAGE,
  },
];

const transformOrigin = {
  vertical: -50,
  horizontal: "center" as const,
};

const AuthSection: React.FC = () => {
  const classes = useAuthStyles();

  return (
    <>
      <TripSection />
      <EnhancedLink className={classes.link} href={TO_MESSAGES_PAGE}>
        <Typography className={classes.text} color="textPrimary">
          Messages
        </Typography>
      </EnhancedLink>
      <AccountSection />
    </>
  );
};

const AccountSection: React.FC = () => {
  const { user } = useAuthUser() as { user: User };
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const classes = useAuthStyles();
  const { mutateAsync, isLoading } = useMutation(logoutUser);

  const handleLogout = useCallback(async () => {
    await mutateAsync();
    window?.location.replace(TO_HOME_PAGE);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleOpenMenu = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const accountSections = useMemo(
    () => [
      {
        label: "Profile",
        path: `${TO_DRIVERS_PAGE}/${user._id}`,
      },
      {
        label: "Favourites",
        path: `${TO_DRIVERS_PAGE}/${user._id}/favourites`,
      },
      {
        label: "Become a Host",
        path: TO_BECOME_HOST_PAGE,
      },
      {
        label: "Account",
        path: TO_ACCOUNT_PAGE,
      },
      {
        label: "Contact Support",
        path: TO_SUPPORT_PAGE,
      },
    ],
    [user._id]
  );

  return (
    <>
      <Avatar
        alt={user.firstname}
        className={classes.avatar}
        src={user.image || DEFAULT_USER_IMAGE_URL}
        variant="rounded"
        onClick={handleOpenMenu}
      />
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        keepMounted
        id="account-menu"
        onClose={handleCloseMenu}
        transformOrigin={transformOrigin}
      >
        {accountSections.map(({ path, label }) => (
          <MenuItem key={path}>
            <EnhancedLink href={path} className={classes.link}>
              {label}
            </EnhancedLink>
          </MenuItem>
        ))}
        <MenuItem disabled={isLoading} onClick={handleLogout} button>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

const TripSection: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const classes = useAuthStyles();

  return (
    <>
      <Typography
        onClick={(e) => setAnchorEl(e.currentTarget)}
        className={classes.text}
        color="textPrimary"
      >
        Trips
      </Typography>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        keepMounted
        id="user-menu"
        onClose={() => setAnchorEl(null)}
        transformOrigin={transformOrigin}
      >
        {tripSections.map(({ path, label }) => (
          <MenuItem key={path}>
            <EnhancedLink href={path} className={classes.link}>
              {label}
            </EnhancedLink>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AuthSection;
