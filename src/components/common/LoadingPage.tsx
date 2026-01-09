import {
  CircularProgress,
  CircularProgressProps,
  Paper,
  PaperProps,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";

interface Props {
  rootProps?: PaperProps;
  spinnerProps?: CircularProgressProps;
}

const useStyles = makeStyles()(() => ({
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    maxWidth: "100vw",
    width: "100%",
  },
}));

const LoadingPage: React.FC<Props> = ({ rootProps, spinnerProps }) => {
  const { classes } = useStyles();
  return (
    <Paper className={classes.root} square variant="outlined" {...rootProps}>
      <CircularProgress size={40} color="primary" {...spinnerProps} />
    </Paper>
  );
};

export default LoadingPage;
