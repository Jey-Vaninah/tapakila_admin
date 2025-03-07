export type Dummy = {
  id: string;
  name: string;
};

export type User = {
  id: string;
  username: string;
  name: string;
  email: string;
  email_verified_at: Date | null;
  password: string;
  image_url: string;
  country_id: string;
  create_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
};

export type Event = {
  id: string;
  event_hall_id: string;
  host_id: string;
  user_id: string;
  title: string;
  slug: string;
  description: string;
  start_date: Date;
  start_time: string;
  end_date: Date;
  end_time: string;
  age_limit: string;
  create_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
};

export type Ticket = {
  id: string;
  event_id: string;
  ticket_type_id: string;
  user_id: string;
  ticket_number: string;
  amount_paid: number;
  currency_id: string;
  payment_confirmed: boolean;
  create_at: Date;
  updated_at: Date;
  deleted_at: Date;
};
