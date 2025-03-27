import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Ticket } from "./types";
import { getAxiosInstance } from "../config/axios";

export const ticketProvider: ResourceProvider<Ticket> = {
  resource: "ticket",
  getOne: async ({ id }) =>
    getAxiosInstance()
      .get<Ticket>("/tickets/" + id)
      .then((response) => response.data),
  getList: async () =>
    getAxiosInstance()
      .get<Ticket[]>("/tickets")
      .then((response) => response.data),
  saveOrUpdate: async ({ meta, data }) => {
	console.log(data)
    if (meta?.mutationType === "CREATE") {
      return getAxiosInstance()
        .post<Ticket>("/tickets/", data)
        .then((response) => response.data);
    } else {
      return getAxiosInstance()
        .put<Ticket>("/tickets/", data)
        .then((response) => response.data);
    }
  },
  delete: async ({ id }) => {
    return getAxiosInstance()
      .delete<Ticket>("/tickets/" + id)
      .then((response) => response.data);
  },
};
