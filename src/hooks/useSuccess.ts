import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";

export function useSuccess() {
  const router = useRouter();
  useEffect(() => {
    const message = router?.query.success;
    if (message) {
      toast.success(message as string);
    }
  }, []);
}
