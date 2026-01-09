import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(({ breakpoints, palette }) => ({
  avatar: {
    height: "120px",
    width: "120px",
    [breakpoints.down("md")]: {
      height: "85px",
      width: "85px",
      margin: "auto",
    },
  },
  banner: {
    height: "200px",
    width: "100%",
    borderBottom: `1px solid ${palette.divider}`,
    [breakpoints.down("xs")]: {
      height: "100px",
    },
  },
  button: {
    textTransform: "none",
    display: "block",
    margin: "0.5rem auto",
    [breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  container: {
    padding: "0 0.5rem",
    [breakpoints.down("md")]: {
      maxWidth: "670px",
    },
  },
  gridContainer: {
    margin: 0,
    width: "100%",
  },
  gridItemOverflow: {
    marginTop: "-50px",
  },
}));

export const useProfileDetailsStyles = makeStyles()(({ breakpoints }) => ({
  avatar: {
    height: "120px",
    width: "120px",
    [breakpoints.down("md")]: {
      height: "85px",
      width: "85px",
      margin: "auto",
    },
  },
  infoWrapper: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
  },
  link: {
    textDecoration: "none",
  },
  memberSince: {
    fontWeight: 500,
    fontSize: "0.8rem",
    marginLeft: "0.3rem",
  },
  subTitle: {
    fontSize: "0.9rem",
    [breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  title: {
    fontWeight: 700,
    margin: "1.5rem 0 0.5rem 0",
    [breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

export const useReviewsStyles = makeStyles()(({ breakpoints }) => ({
  avatar: {
    height: "85px",
    width: "85px",
  },
  defaultAvatar: {
    height: "100px",
    marginRight: "1rem",
    width: "100px",
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
  link: {
    textDecoration: "none",
  },
}));
