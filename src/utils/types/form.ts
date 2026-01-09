import { AxiosError } from "axios";
import { UseFormSetError } from "react-hook-form";

export interface UserFormValues {
  confirmPassword: string;
  email: string;
  endDate: Date;
  firstname: string;
  lastname: string;
  oldPassword: string;
  password: string;
  subject: string;
  message: string;
}

export interface VehicleFormValues {
  endDate: Date;
  image: File;
  make: string;
  name: string;
  rentalFee: string;
  startDate: Date;
}

export interface FormValues extends UserFormValues, VehicleFormValues {}

export interface DisplayErrorMessagesProps {
  error: AxiosError<Record<string, string>>;
  formData: FormValues;
  setError: UseFormSetError<FormValues>;
  setMessage: (value: string) => void;
}
