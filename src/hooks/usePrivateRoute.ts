import { useRouter } from "next/router";
import { useEffect } from "react";

import { TO_LOGIN_PAGE } from "src/utils/constants";
import { useAuthUser } from "./useAuthUser";

export function usePrivateRoute() {
  const { user, isPending } = useAuthUser();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !user) {
      router.push({
        pathname: TO_LOGIN_PAGE,
        query: { next: router.pathname },
      });
    }
  }, [isPending, user]);

  return { loading: isPending || !user };
}
