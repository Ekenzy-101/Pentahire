import { useMediaQuery, Theme, Breakpoint } from "@mui/material";

export function useScreenSizeBetween(key: number | Breakpoint) {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(key));
}

export function useScreenSizeDown(key: number | Breakpoint) {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(key));
}

export function useScreenSizeUp(key: number | Breakpoint) {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(key));
}
