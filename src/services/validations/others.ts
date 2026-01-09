import { isObject } from "src/utils/helpers";
import { DisplayErrorMessagesProps, FormValues } from "src/utils/types";

export function displayErrorMessages({
  error,
  formData,
  setError,
  setMessage,
}: DisplayErrorMessagesProps) {
  const errors = error.response?.data;
  if (errors && isObject(errors)) {
    const fields = Object.keys(formData);
    Object.keys(errors).forEach((errorKey) => {
      if (fields.includes(errorKey)) {
        setError(errorKey as keyof FormValues, {
          message: errors[errorKey],
        });
      } else {
        setMessage(errors[errorKey]);
      }
    });
    return;
  }

  setMessage(error.message);
}
