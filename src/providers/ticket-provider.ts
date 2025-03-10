import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Ticket } from "./types";

let TICKETS: Ticket[] = [
  {
    id: "TICKET001",
    event_id: "1",
    ticket_type_id: "VIP",
    user_id: "FAN001",
    ticket_number: "A123456",
    amount_paid: 100,
    currency_id: "EUR",
    payment_confirmed: true,
    create_at: new Date(),
    updated_at: new Date(),
    deleted_at: new Date(),
  },
];
export const ticketProvider: ResourceProvider<Ticket> = {
  resource: "ticket",
  getOne: async ({ id }) => TICKETS.find((ticket) => ticket.id === id)!,
  getList: async () => Promise.resolve(TICKETS),
  saveOrUpdate: async ({ data, meta }) => {
    if (meta?.mutationType === "CREATE") {
      TICKETS.push(data as Ticket);
      return TICKETS.find((ticket) => ticket.id === data.id)!;
    } else {
      TICKETS = TICKETS.map((ticket) => {
        return ticket.id === data.id ? (data as Ticket) : ticket;
      });
      return TICKETS.find((ticket) => ticket.id == data.id)!;
    }
  },
  delete: async ({ id }) => {
    const toDeleted = TICKETS.find((ticket) => {
      return ticket.id === id;
    });
    TICKETS = TICKETS.filter((ticket) => {
      return ticket.id !== id;
    });
    return toDeleted!;
  },
};
