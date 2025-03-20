import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { getAxiosInstance } from "../config/axios";
import { EventHall } from "./types";

export const eventHallProvider: ResourceProvider<EventHall> = {
  resource: "eventHall",
  getOne: async ({ id }) =>
    getAxiosInstance()
      .get<EventHall>("/eventHalls/" + id)
      .then((response) => response.data),

  getList: async () =>
    getAxiosInstance()
      .get<EventHall[]>("eventHalls")
      .then((response) => response.data),
  saveOrUpdate: async ({ meta, data }) => {
    if (meta?.mutationType === "CREATE") {
      return getAxiosInstance()
        .post<EventHall>("/eventHalls", data)
        .then((response) => response.data);
    } else {
      return getAxiosInstance()
        .put<EventHall>("/eventHalls", data)
        .then((response) => response.data);
    }
  },
  delete: async ({ id }) => {
    return getAxiosInstance()
      .delete<EventHall>("/evenHalls" + id)
      .then((response) => response.data);
  },
};
