import { makeStyles } from "tss-react/mui";

interface Props {
  variant: "make" | "location";
}

export const useCarStyles = makeStyles()(({ breakpoints }) => ({
  root: {
    display: "flex !important",
    maxHeight: 501,
    margin: "0 auto",
    width: "100%",
  },
  body: {
    margin: "1.5rem 0",
  },
  button: {
    textTransform: "none",
    [breakpoints.down("md")]: {
      display: "block",
      margin: "auto",
    },
  },
  container: {
    maxWidth: "none",
    "& .slick-slide": {
      margin: "0.1rem 0.5rem !important",
      width: `400px !important`,
      [breakpoints.down("xs")]: {
        width: `300px !important`,
      },
      [breakpoints.down(400)]: {
        width: `250px !important`,
      },
    },
    "& .slick-list": {
      height: "26rem !important",
      [breakpoints.down("sm")]: {
        height: "28rem !important",
      },
      [breakpoints.down(450)]: {
        height: "25rem !important",
      },
      [breakpoints.down(400)]: {
        height: "23rem !important",
      },
    },
  },
  image: {
    height: "274px",
    width: "390px",
    margin: "auto",
    [breakpoints.down("md")]: {
      height: "auto",
      maxWidth: 416,
      width: "100%",
    },
  },
  link: {
    textDecoration: "none",
  },
  title: {
    fontWeight: 550,
    fontSize: "1.7rem",
    lineHeight: "1",
    [breakpoints.down("md")]: {
      fontSize: "1.4rem",
    },
  },
}));

export const useMakeOrLocationStyles = makeStyles<Props>()(
  ({ palette }, { variant }) => ({
    root: {
      borderRadius: 8,
      overflow: "hidden",
      padding: variant === "make" ? 0 : 16,
      width: variant === "make" ? 190 : 156,
      "&:hover": {
        boxShadow:
          "0 8px 16px 0 rgb(35 31 32 / 10%), 0 0 3px 0 rgb(35 31 32 / 5%)",
      },
      "&:hover .MuiTypography-root": {
        color: palette.primary.main,
        fontWeight: 550,
      },
    },
    container: {
      "& .slick-slide": {
        margin: "0.1rem 0.5rem !important",
        width: `${variant === "make" ? 190 : 156}px !important`,
      },
      "& .slick-list": {
        height: `${variant === "make" ? 225 : 200}px !important`,
      },
    },
    cardActions: {
      alignItems: "center",
      height: variant === "make" ? 56 : 30,
      justifyContent: "center",
    },
    image: {
      height: variant === "make" ? 154 : 120,
      width: variant === "make" ? "100%" : 120,
    },
    link: {
      textDecoration: "none",
    },
    title: {
      marginLeft: "0.7rem",
    },
  })
);

export const useLocationStyles = makeStyles()(({ palette }) => ({
  root: {
    borderRadius: 8,
    height: 180,
    padding: "16px",
    width: 156,
    "&:hover": {
      boxShadow:
        "0 8px 16px 0 rgb(35 31 32 / 10%), 0 0 3px 0 rgb(35 31 32 / 5%)",
    },
    "&:hover .MuiTypography-root": {
      color: palette.primary.main,
      fontWeight: 550,
    },
  },
  container: {
    "& .slick-slide": {
      margin: "0.1rem 0.5rem !important",
      width: "156px !important",
    },
    "& .slick-list": {
      height: "200px !important",
    },
  },
  cardActions: {
    alignItems: "center",
    height: 56,
    justifyContent: "center",
  },
  image: {
    height: 120,
    width: 120,
  },
  link: {
    textDecoration: "none",
  },
  title: {
    marginLeft: "0.7rem",
  },
}));
