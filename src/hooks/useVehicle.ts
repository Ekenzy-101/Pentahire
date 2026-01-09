import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getVehicle } from "src/services/api";

export function useVehicle() {
  const router = useRouter();
  const id = router.query.id as string;

  return useQuery({
    queryKey: ["vehicle", id],
    queryFn: () => getVehicle(id),
    staleTime: 1000 * 60 * 60,
  });
}
