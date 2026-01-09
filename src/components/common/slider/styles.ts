import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(({ palette, breakpoints }) => ({
  root: {
    marginBottom: "2rem",
    position: "relative",
    "& .slick-list": {
      padding: "0.5rem",
    },
    "& .slick-arrow": {
      display: "none !important",
    },
  },
  btn: {
    boxShadow:
      "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
    position: "absolute",
    top: "40%",
    zIndex: 200,
    background: `${palette.background.paper} !important`,
  },
  displayNone: {
    [breakpoints.down(769)]: {
      display: "none",
    },
  },
  nextBtn: {
    right: 0,
  },
  prevBtn: {
    left: 0,
  },
}));
