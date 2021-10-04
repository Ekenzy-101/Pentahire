export interface UserFormValues {
  confirmPassword: string;
  email: string;
  endDate: Date;
  firstname: string;
  lastname: string;
  newPassword: string;
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
