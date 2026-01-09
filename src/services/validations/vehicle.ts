import { FieldErrors, Resolver } from "react-hook-form";
import { FormValues, UserFormValues } from "src/utils/types";

const validate: Record<string, (value: any) => string | undefined> = {};

export const vehicleResolver: Resolver<FormValues> = async (
  values: FormValues
) => {
  const errors: FieldErrors<FormValues> = {};
  Object.keys(values).forEach((field) => {
    const key = field as keyof UserFormValues;
    const message = validate[key](values[key]);
    if (message) {
      errors[key] = {
        type: "",
        message,
      };
    }
  });

  return {
    errors,
    values: (values.email
      ? { ...values, email: values.email.toLowerCase() }
      : values) as any,
  };
};
