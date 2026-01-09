import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "src/services/api";

export function useAuthUser() {
  const MILLI_SECONDS_IN_ONE_HOUR = 1000 * 60 * 60;
  const { data, isPending } = useQuery({
    queryKey: ["authUser"],
    queryFn: () => getAuthUser(),
    staleTime: MILLI_SECONDS_IN_ONE_HOUR,
  });

  return { user: data?.user, isPending };
}
