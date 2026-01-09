import { useRouter } from "next/router";
import { useEffect } from "react";

import { TO_HOME_PAGE } from "src/utils/constants";
import { useAuthUser } from "./useAuthUser";

export function useRedirectedRoute(path?: string) {
  const { user, isPending } = useAuthUser();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && user && path != router.pathname) {
      router.push(path || TO_HOME_PAGE);
    }
  }, [isPending, user]);

  return { loading: isPending || user };
}
