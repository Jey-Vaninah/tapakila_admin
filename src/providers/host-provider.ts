import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { getAxiosInstance } from "../config/axios";
import { Host } from "./types";

export const hostProvider: ResourceProvider<Host> = {
  resource: "host",
  getOne: async ({ id }) =>
    getAxiosInstance()
      .get<Host>("/hosts/" + id)
      .then((response) => response.data),

  getList: async () =>
    getAxiosInstance()
      .get<Host[]>("/hosts")
      .then((response) => response.data),
  saveOrUpdate: async ({ meta, data }) => {
    if (meta?.mutationType === "CREATE") {
      return getAxiosInstance()
        .post<Host>("/hosts", data)
        .then((response) => response.data);
    } else {
      return getAxiosInstance()
        .put<Host>("/hosts", data)
        .then((response) => response.data);
    }
  },
  delete: async ({ id }) => {
    return getAxiosInstance()
      .delete<Host>("/hosts" + id)
      .then((response) => response.data);
  },
};
