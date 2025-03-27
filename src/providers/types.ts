export enum RoleEnum {
  USER = "Organizer",
  ADMIN_EVENTS = "Admin",
}

export type Role = {
  id: string;
  title: RoleEnum;
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
  updatedAat: Date;
  deletedAt: Date | null;
  roleId: Role;
};

export enum Status {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  CANCELED = "CANCELED",
  EVENT = "EVENT",
}

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
  eventHallId: EventHall;
  hostId: Host;
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
  eventId: Event;
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
  eventId: Event;
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
