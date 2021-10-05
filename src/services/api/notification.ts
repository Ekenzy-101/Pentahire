import { http } from ".";

export function sendVerifyEmailNotification(formData: { email: string }) {
  return http.post("/notification/verify-email", formData);
}

export function sendForgotPasswordNotification(formData: { email: string }) {
  return http.post("/notification/forgot-password", formData);
}
