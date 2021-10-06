import { useRouter } from "next/router";
import { useEffect } from "react";

export function usePrefetchPage(path: string) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(path);
  }, [path]);
}
