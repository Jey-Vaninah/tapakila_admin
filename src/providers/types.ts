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
  countryId: Country;
  createAt: Date;
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

export type Event = {
  id: string;
  eventHallId: EventHall;
  hostId: Host;
  userId: User;
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
  currencyId: Currency;
  createdAt: Date;
  updatedAt: Date;
};

export type Ticket = {
  id: string;
  eventId: Event;
  ticketType: TicketType;
  userId: User;
  ticketNumber: string;
  amountPaid: number;
  currencyId: Currency;
  paymentConfirmed: boolean;
  createAt: Date;
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
  countryId: Country;
  createAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  role: Role;
};
