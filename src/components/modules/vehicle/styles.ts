import { makeStyles } from "tss-react/mui";
import { red } from "@mui/material/colors";

export const useStyles = makeStyles()(({ breakpoints, palette }) => ({
  banner: {
    height: "60vh",
    width: "100%",
    borderBottom: `1px solid ${palette.divider}`,
    [breakpoints.down("lg")]: {
      height: "50vh",
    },
    [breakpoints.down("md")]: {
      height: "45vh",
    },
    [breakpoints.down("sm")]: {
      height: "40vh",
    },
    [breakpoints.down("xs")]: {
      height: "35vh",
    },
  },
  favourite: {
    color: red[600],
    fontSize: "1.5rem",
    [breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  favouriteBorder: {
    color: palette.action.active,
    fontSize: "1.5rem",
    [breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  likeBtn: {
    background: `${palette.background.paper} !important`,
    padding: "0.5rem",
    position: "absolute",
    right: 16,
    top: 16,
    zIndex: 200,
    [breakpoints.down("sm")]: {
      right: 10,
      top: 10,
    },
  },
  gridContainer: {
    margin: 0,
    width: "100%",
    [breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
}));

export const useBookingStyles = makeStyles()(() => ({
  button: {
    textTransform: "none",
  },
  link: {
    textDecoration: "none",
  },
  memberSince: {
    fontWeight: 500,
    fontSize: "0.8rem",
    marginLeft: "0.3rem",
  },
  tripCancellationWrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0.5rem",
  },
}));

export const useOwnerStyles = makeStyles()(() => ({
  avatar: {
    height: "85px",
    width: "85px",
  },
  flexWrapper: {
    alignItems: "center",
    display: "flex",
    gap: "1rem",
  },
  link: {
    textDecoration: "none",
  },
  memberSince: {
    fontWeight: 500,
    fontSize: "0.8rem",
    marginLeft: "0.3rem",
  },
  title: {
    fontWeight: 700,
    margin: "0 0 0.3rem 0",
  },
}));

export const useReviewsStyles = makeStyles()(({ breakpoints }) => ({
  avatar: {
    height: "85px",
    width: "85px",
  },
  button: {
    textTransform: "none",
    display: "block",
    margin: "35px auto 0 auto",
    [breakpoints.down("xs")]: {
      width: "100%",
      margin: "16px auto 0 auto",
    },
  },
}));
