import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getUser } from "src/services/api";

export function useUser() {
  const router = useRouter();
  const id = router.query.id as string;

  return useQuery(["user", id], () => getUser(id), {
    staleTime: 1000 * 60 * 60,
  });
}
