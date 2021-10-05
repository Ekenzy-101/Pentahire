import { useMediaQuery, Theme } from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export function useScreenSizeBetween(key: number | Breakpoint) {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(key));
}

export function useScreenSizeDown(key: number | Breakpoint) {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(key));
}

export function useScreenSizeUp(key: number | Breakpoint) {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(key));
}
