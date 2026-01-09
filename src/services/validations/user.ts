import { FieldErrors, Resolver } from "react-hook-form";
import validator from "validator";

import { FormValues, UserFormValues } from "src/utils/types";

const validate: Record<string, (value: any) => string | undefined> = {
  email: validateEmail,
  firstname: validateName("Firstname"),
  lastname: validateName("Lastname"),
  oldPassword: validatePassword,
  password: validatePassword,
  subject: validateRequiredField("Subject"),
  message: validateRequiredField("Message"),
};

export const userResolver: Resolver<FormValues> = async (
  values: FormValues
) => {
  const errors: FieldErrors<FormValues> = {};
  const { confirmPassword, password } = values;
  Object.keys(values).forEach((field) => {
    const key = field as keyof UserFormValues;
    const message =
      key === "confirmPassword"
        ? validateConfirmPassword(confirmPassword, password)
        : validate[key](values[key]);
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

export function validateCode(value: string) {
  return (
    validator.isNumeric(value, { no_symbols: true }) &&
    validator.isLength(value, { max: 6 })
  );
}

function validateEmail(value: string) {
  if (!validator.isEmail(value)) return "Email is not valid";

  if (!validator.isLength(value, { max: 255 }))
    return "Email should not be greater than 255 characters";

  return undefined;
}

function validateRequiredField(field: string) {
  return (value: string) => {
    if (validator.isEmpty(value)) return `${field} is required`;

    return undefined;
  };
}

function validateName(field: string) {
  return (value: string) => {
    if (validator.isEmpty(value)) return `${field} is required`;

    if (!validator.matches(value, /^[a-z ]+$/i))
      return `${field} should contain letters or space`;

    if (!validator.isLength(value, { max: 50 }))
      return `${field} should be less than 50 characters`;

    return undefined;
  };
}

function validatePassword(value: string) {
  if (!validator.isLength(value, { min: 8 }))
    return "Password should not be less than 8 characters";

  if (!validator.isLength(value, { max: 128 }))
    return "Password should not be greater than 128 characters";

  const hasLowercaseCharacters = validator.matches(value, /[a-z]+/);
  const hasUppercaseCharacters = validator.matches(value, /[A-Z]+/);
  const hasSpecialCharacters = validator.matches(value, /\W+/);
  const hasNumericCharacters = validator.matches(value, /\d+/);
  const hasAll =
    hasLowercaseCharacters &&
    hasUppercaseCharacters &&
    hasSpecialCharacters &&
    hasNumericCharacters;

  if (!hasAll)
    return "Password should be a mix of uppercase, lowercase, numeric and special characters";

  return undefined;
}

function validateConfirmPassword(value: string, match: string) {
  if (value !== match) return "Password do not match";

  return undefined;
}
