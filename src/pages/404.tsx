import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";

import Header from "src/components/common/header";
import EnhancedPaper from "src/components/common/Paper";
import SEO from "src/components/common/SEO";
import { COMPANY_NAME, TO_HOME_PAGE } from "src/utils/constants";

const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
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
  }),
  { index: 1 }
);

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <EnhancedPaper>
      <SEO title={`Not Found - ${COMPANY_NAME}`} />
      <Header />
      <Box className={classes.wrapper}>
        <Avatar src={"/images/404.png"} className={classes.notFoundImg} />
        <Typography variant="h6" component="p">
          We can’t find the page you’re looking for. Please double-check the
          address and try again. You might be able to find what you’re looking
          for from our{" "}
          <Link href={TO_HOME_PAGE}>
            <a className={classes.link}>home page.</a>
          </Link>
        </Typography>
      </Box>
    </EnhancedPaper>
  );
};

export default NotFoundPage;
