import { http } from "./http";

export function verifyEmail(formData: { token: string }) {
  return http.post("/verification/email", formData);
}
