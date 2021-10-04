import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const BREAKPOINTS = {
  xs: 0,
  sm: 510,
  md: 780,
  lg: 1000,
  xl: 1300,
};

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      secondary: {
        main: "#4285F4", // Blue
        light: "#D2E3FC",
      },
      primary: {
        main: "#593CFB", // Purple
        light: "#F2E9FF",
      },
    },
    breakpoints: {
      values: BREAKPOINTS,
    },
  })
);
