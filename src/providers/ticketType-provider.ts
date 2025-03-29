import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { TicketType } from "./types";
import { getAxiosInstance } from "../config/axios";

export const ticketTypeProvider: ResourceProvider<TicketType> = {
  resource: "typeTicket",
  getOne: async ({ id }) =>
    getAxiosInstance()
      .get<TicketType>("/ticketTypes/" + id)
      .then((response) => response.data),
  getList: async () =>
    getAxiosInstance()
      .get<TicketType[]>("/ticketTypes")
      .then((response) => response.data),
  saveOrUpdate: async ({ meta, data }) => {
    if (meta?.mutationType === "CREATE") {
      return getAxiosInstance()
        .post<TicketType>("/ticketTypes/", data)
        .then((response) => response.data);
    } else {
      return getAxiosInstance()
        .put<TicketType>("/ticketTypes/", data)
        .then((response) => response.data);
    }
  },
  delete: async ({ id }) => {
    return getAxiosInstance()
      .delete<TicketType>("/ticketTypes/" + id)
      .then((response) => response.data);
  },
};
