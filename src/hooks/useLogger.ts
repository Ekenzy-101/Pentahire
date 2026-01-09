import { IS_PRODUCTION } from "src/utils/constants";

export function useLogger(prefix: string): (...args: any[]) => void {
  return IS_PRODUCTION
    ? Function.bind // Use sentry or axium
    : console.log.bind(console, `${prefix}:`);
}
