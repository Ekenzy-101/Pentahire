import { AxiosRequestConfig } from "axios";

import { http } from "./http";
import { User, UserFormValues } from "src/utils/types";

export function loginUser(formData: UserFormValues) {
  return http.post("/auth/login", formData);
}

export function logoutUser() {
  return http.post("/auth/logout");
}

export async function getAuthUser(config?: AxiosRequestConfig) {
  const { data } = await http.get("/auth/me", config);
  return data as { user: User | null };
}

export async function registerUser(
  formData: UserFormValues & { hcaptcha_token: string }
) {
  const { data } = await http.post("/auth/register", formData);
  return data as { user: User };
}

export async function resetPassword(formData: {
  password: string;
  token: string;
}) {
  const { data } = await http.post("/auth/reset-password", formData);
  return data;
}
