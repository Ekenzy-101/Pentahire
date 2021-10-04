import { useQuery } from "react-query";
import { getAuthUser } from "src/services/api";

export const useAuthUser = () => {
  const MILLI_SECONDS_IN_ONE_HOUR = 1000 * 60 * 60;
  const { data, isLoading } = useQuery("authUser", () => getAuthUser(), {
    cacheTime: MILLI_SECONDS_IN_ONE_HOUR,
  });

  return { user: data?.user, isLoading };
};
