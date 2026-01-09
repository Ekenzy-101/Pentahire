"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Roboto } from "next/font/google";

export const BREAKPOINTS = {
  xs: 0,
  sm: 510,
  md: 780,
  lg: 1000,
  xl: 1300,
};

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = responsiveFontSizes(
  createTheme({
    cssVariables: true,
    palette: {
      secondary: {
        main: "#4285F4", // Blue
        light: "#D2E3FC",
      },
      primary: {
        main: "#593CFB", // Purple
        light: "#F2E9FF",
      },
      background: {
        default: "#FAFAFA",
        paper: "#FFFFFF",
      },
    },
    breakpoints: {
      values: BREAKPOINTS,
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  })
);
