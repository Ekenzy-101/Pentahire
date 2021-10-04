import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ palette }) => ({
  button: {
    color: palette.common.white,
    marginBottom: "1rem",
    textTransform: "none",
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "calc(100vh - 70px)",
  },
  error: {
    border: `1px solid ${palette.error.main} !important`,
    "&:focus": {
      border: `2px solid ${palette.error.main} !important`,
    },
  },
  fileInput: {
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
  },
  fileWrapper: {
    alignItems: "center",
    borderRadius: "4px",
    border: `1px solid ${palette.action.disabled}`,
    cursor: "pointer",
    display: "flex",
    height: "40px",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  legend: {
    textAlign: "center",
    marginBottom: "0.5rem",
  },
  linkWrapper: {
    display: "flex",
    marginBottom: "1rem",
    "& a": {
      color: palette.primary.main,
      marginLeft: "auto",
    },
  },
  textarea: {
    borderRadius: "4px",
    border: `1px solid ${palette.action.disabled}`,
    fontFamily: "inherit",
    fontSize: "1rem",
    outline: "none",
    padding: "10px 14.5px",
    resize: "none",
    width: "100%",
    "&:focus": {
      border: `2px solid ${palette.primary.main}`,
    },
  },
}));
