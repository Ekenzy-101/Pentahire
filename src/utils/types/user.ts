export interface User {
  id: string;
  averate_rating: number;
  created_at: string;
  email: string;
  firstname: string;
  image: string;
  is_email_verified: boolean;
  is_2fa_enabled: boolean;
  is_phone_verified: boolean;
  lastname: string;
  phone_no: string;
  reviews_count: number;
  trips_count: number;
}
