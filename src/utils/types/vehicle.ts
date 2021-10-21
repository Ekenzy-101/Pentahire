import { Location } from "./location";
import { User } from "./user";

export interface Vehicle {
  id: string;
  address: string;
  average_rating: number;
  created_at?: string;
  endDate: string;
  image: string;
  location: Location;
  make: string;
  name: string;
  rental_fee: number;
  startDate: string;
  reviews_count?: number;
  trips_count?: number;
  user_id?: string;
  user?: User;
}

export interface VehicleInput extends NonNullable<Vehicle> {}

export interface VehicleOption {
  label: string;
  value: string;
}
