import { makeStyles } from "@material-ui/core";

export const useAuthStyles = makeStyles(
  ({ breakpoints }) => ({
    avatar: {
      cursor: "pointer",
      height: "2rem",
      marginLeft: "1rem",
      width: "2rem",
    },
    link: {
      color: "inherit",
    },
    text: {
      marginLeft: "1rem",
      cursor: "pointer",
      fontWeight: "bold",
      [breakpoints.down("xs")]: {
        fontSize: "0.9rem",
      },
    },
  }),
  { index: 1 }
);

export const useGuestStyles = makeStyles(
  () => ({
    button: {
      marginLeft: "0.5rem",
      textTransform: "none",
    },
  }),
  { index: 1 }
);

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    appbar: {
      background: palette.background.paper,
      width: "100%",
    },
    logo: {
      height: 60,
      width: 50,
    },
    toolbar: {
      margin: "auto",
      maxWidth: 1000,
      width: "100%",
      [breakpoints.down(300)]: {
        padding: "0 6px",
      },
    },
  }),
  { index: 1 }
);
