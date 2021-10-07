import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";

export const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      backgroundImage: "url(/images/home-hero.jpg)",
      backgroundPosition: "0 -500px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100vw auto",
      marginBottom: "2rem",
      minHeight: 400,
      [breakpoints.down("lg")]: {
        backgroundPosition: "0 -200px",
      },
      [breakpoints.down("md")]: {
        backgroundPosition: "0 -100px",
      },
      [breakpoints.down("sm")]: {
        backgroundPosition: "0 0px",
      },
      [breakpoints.only("xs")]: {
        minHeight: "40vh",
        marginBottom: 0,
      },
    },
    title: {
      fontWeight: 550,
      textAlign: "center",
      marginBottom: "2rem",
      [breakpoints.down("sm")]: {
        padding: "0 0.5rem",
        fontSize: "2rem",
      },
    },
  }),
  { index: 1 }
);

const HomeHero: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}></Box>
      <Typography variant="h2" component="h1" className={classes.title}>
        The world's largest car sharing marketplace
      </Typography>
    </>
  );
};

export default HomeHero;
