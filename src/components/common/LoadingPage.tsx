import { CircularProgress, makeStyles, Paper } from "@material-ui/core";
import React from "react";

interface Props {
  style?: React.CSSProperties;
}

const useStyles = makeStyles(
  () => ({
    root: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      minHeight: "100vh",
      maxWidth: "100vw",
      width: "100%",
    },
  }),
  { index: 1 }
);

const LoadingPage: React.FC<Props> = ({ style }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} square variant="outlined" style={style}>
      <CircularProgress size={40} color="primary" />
    </Paper>
  );
};

export default LoadingPage;
