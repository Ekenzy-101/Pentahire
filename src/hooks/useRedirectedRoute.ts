import { useRouter } from "next/router";
import { useEffect } from "react";

import { TO_HOME_PAGE } from "src/utils/constants";
import { useAuthUser } from "./useAuthUser";

export function useRedirectedRoute(path?: string) {
  const { user, isLoading } = useAuthUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.push(path || TO_HOME_PAGE);
    }
  }, [isLoading, user]);

  return { loading: isLoading || user };
}
