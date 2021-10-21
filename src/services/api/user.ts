import { User } from "src/utils/types";
import { http } from "./http";

export async function getUser(id: string) {
  const { data } = await http.get(`/users/${id}`);
  return data as { user: User };
}
