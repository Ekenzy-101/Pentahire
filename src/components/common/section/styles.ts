import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(({ breakpoints, palette, shadows }) => ({
  badgeAnchor: {
    left: "50%",
  },
  chip: {
    background: palette.background.paper,
    boxShadow: shadows[2],
    flexDirection: "row-reverse",
    padding: "8px 18px",
    [breakpoints.down("md")]: {
      padding: "2px 12px",
      height: "auto",
    },
  },
  chipIcon: {
    color: palette.primary.main,
    margin: "0",
  },
  chipLabel: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    padding: "0 0.3rem 0",
  },
  root: {
    display: "flex",
    alignItems: "center",
  },
  ratingText: {
    fontSize: "1.4rem",
    marginBottom: "-1px",
  },
  ratingInfo: {
    marginLeft: "0.3rem",
  },
  ratingIcon: {
    color: palette.primary.main,
  },
}));
