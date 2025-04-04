import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Ticket } from "./types";
import { getAxiosInstance } from "../config/axios";

export const currentTicketProvider: ResourceProvider<Ticket> = {
  resource: "current-ticket",
  getList: async () => {
    const allTickets = await getAxiosInstance()
      .get<Ticket[]>("/tickets")
      .then((response) => response.data);
    allTickets.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return allTickets.slice(0, 3);
  },
};
