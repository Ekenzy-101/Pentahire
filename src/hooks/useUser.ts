import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "src/services/api";

export function useUser() {
  const router = useRouter();
  const id = router.query.id as string;

  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    staleTime: 1000 * 60 * 60,
  });
}
