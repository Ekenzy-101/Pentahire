import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    card: {
      height: "100%",
      position: "relative",
      overflow: "hidden",
      "& .MuiCardMedia-root:hover": {
        transform: "scale(1.3)",
      },
    },
    cardContent: {
      padding: "14px 16px",
      overflow: "hidden",
    },
    divider: { margin: "14px 0" },
    favourite: {
      color: red[600],
      fontSize: "1.2rem",
    },
    favouriteBorder: {
      color: palette.action.active,
      fontSize: "1.2rem",
    },
    likeBtn: {
      background: palette.background.paper + ` !important`,
      border: "1px solid " + palette.action.disabled,
      padding: "0.5rem",
      position: "absolute",
      right: 7,
      top: 5,
      zIndex: 200,
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
    media: {
      height: "20rem",
      width: "100%",
      transition: "all .5s",
      [breakpoints.down("sm")]: {
        height: "17.5rem",
      },
      [breakpoints.down("xs")]: {
        height: "15rem",
      },
      [breakpoints.down(400)]: {
        height: "12rem",
      },
    },
    rentalFee: {
      fontWeight: 700,
      marginLeft: "auto",
    },
    subTitle: {
      alignItems: "center",
      display: "flex",
    },
    title: {
      fontWeight: 700,
      fontSize: "21px",
    },
  }),
  { index: 1 }
);
