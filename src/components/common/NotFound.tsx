import { Avatar, Box, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Link from "next/link";
import { NOT_FOUND_IMAGE_URL, TO_HOME_PAGE } from "src/utils/constants";

const useStyles = makeStyles()(({ breakpoints, palette }) => ({
  link: {
    color: palette.primary.main,
    textDecoration: "none",
  },
  notFoundImg: {
    width: "100%",
    marginBottom: "1rem",
    height: "100%",
    [breakpoints.down("xs")]: {
      margin: "1rem auto",
    },
  },
  wrapper: {
    maxWidth: 500,
    margin: "auto",
    [breakpoints.down("sm")]: {
      padding: "0 1rem",
    },
  },
}));

const NotFoundBody = () => {
  const { classes } = useStyles();

  return (
    <Box component="div" className={classes.wrapper}>
      <Avatar src={NOT_FOUND_IMAGE_URL} className={classes.notFoundImg} />
      <Typography variant="h6" component="p">
        We can’t find the page you’re looking for. Please double-check the
        address and try again. You might be able to find what you’re looking for
        from our{" "}
        <Link href={TO_HOME_PAGE}>
          <a className={classes.link}>home page.</a>
        </Link>
      </Typography>
    </Box>
  );
};

export default NotFoundBody;
