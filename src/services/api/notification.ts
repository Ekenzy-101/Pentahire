import { http } from ".";

export function sendVerifyEmailNotification(formData: { email: string }) {
  return http.post("/notification/verify-email", formData);
}
