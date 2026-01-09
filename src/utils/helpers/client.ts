import { QueryClient } from "@tanstack/react-query";

export function getNewQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        gcTime: Infinity,
        staleTime: Infinity,
      },
    },
  });
}
