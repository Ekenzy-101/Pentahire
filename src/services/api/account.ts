import { http } from "./http";

export function confirmOTPKey(formData: { code: string }) {
  return http.post("/account/otp-key/confirm", formData);
}

export function deleteOTPKey() {
  return http.delete("/account/otp-key");
}

export async function getOTPKey() {
  const { data } = await http.get<{ secret: string; url: string }>(
    "/account/otp-key"
  );
  return data;
}

export async function updatePassword(formData: {
  old_password: string;
  new_password: string;
}) {
  return http.put("/account/password", formData);
}
