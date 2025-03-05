import { DateTimeInputProps } from "react-admin";

export type Dummy = {
  id: string;
  name: string;
}

export type User= {
  id: string;
  username: string;
  name: string;
  email:string;
  email_verified_at: Date | null;
  password: string;
  image_url: string;
  country_id: string;
  create_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}
