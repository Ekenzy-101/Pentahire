import { Avatar, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";

import { DEFAULT_USER_IMAGE_URL } from "src/utils/constants";

const useStyles = makeStyles()(() => ({
  root: {
    alignItems: "center",
    display: "flex",
  },
  avatar: {
    height: 85,
    marginRight: "1rem",
    width: 85,
  },
  title: {
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
}));

const NoReviews: React.FC<{ info: string }> = ({ info }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        src={DEFAULT_USER_IMAGE_URL}
        alt="Default User Image"
        className={classes.avatar}
      />
      <div>
        <Typography className={classes.title}>No reviews yet</Typography>
        <Typography>{info}</Typography>
      </div>
    </div>
  );
};

export default NoReviews;
