import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(({ palette, spacing }) => ({
  avatar: {
    height: "50px",
    width: "50px",
  },
  rating: {
    color: palette.primary.main,
  },
  textSpacing: {
    marginBottom: spacing(1),
  },
}));
