export type Role = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Country = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  id: string;
  username: string;
  name: string;
  email: string;
  emailVerifiedAt: Date | null;
  password: string;
  imageUrl: string;
  country: Country;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  role: Role;
};

export type UserUpdate = {
  id: string;
  username: string;
  name: string;
  email: string;
  emailVerifiedAt: Date | null;
  password: string | null;
  newPassword: string | null;
  confirmPassword: string | null;
  imageUrl: string;
  country: Country;
  role: Role;
};

export type EventHall = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Host = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Newsletter = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};
export type Tag = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export type Event = {
  id: string;
  eventHall: EventHall;
  host: Host;
  user: User;
  title: string;
  slug: string;
  description: string;
  startDate: Date;
  startTime: Date;
  endDate: Date;
  endTime: Date;
  ageLimit: string;
  createdAt: Date;
  updatedAt: Date;
  eventImage: string;
};

export type Currency = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TicketType = {
  id: string;
  event: Event;
  title: string;
  slug: string;
  description: string;
  availableTicket: string;
  price: string;
  currency: Currency;
  createdAt: Date;
  updatedAt: Date;
};

export type Ticket = {
  id: string;
  event: Event;
  ticketType: TicketType;
  user: User;
  ticketNumber: string;
  amountPaid: number;
  currency: Currency;
  paymentConfirmed: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export type Edit = {
  id: string;
  username: string;
  name: string;
  email: string;
  emailVerifiedAt: Date | null;
  password: string;
  imageUrl: string;
  country: Country;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  role: Role;
};
