import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Event } from "./types";
import { getAxiosInstance } from "../config/axios";

export const eventProvider: ResourceProvider<Event> = {
  resource: "event",
  getOne: async ({ id }) =>
    getAxiosInstance()
      .get<Event>("/events/" + id)
      .then((response) => response.data),

  getList: async () =>
    getAxiosInstance()
      .get<Event[]>("/events")
      .then((response) => response.data),
  saveOrUpdate: async ({ meta, data }) => {
    console.log(data);
    if (meta?.mutationType === "CREATE") {
      return getAxiosInstance()
        .post<Event>("/events/", data)
        .then((response) => response.data);
    } else {
      return getAxiosInstance()
        .put<Event>("/events/", data)
        .then((response) => response.data);
    }
  },
  delete: async ({ id }) => {
    return getAxiosInstance()
      .delete<Event>("/events/" + id)
      .then((response) => response.data);
  },
};
