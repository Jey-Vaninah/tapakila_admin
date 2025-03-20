import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Newsletter } from "./types";
import { getAxiosInstance } from "../config/axios";

export const newsletterProvider: ResourceProvider<Newsletter> = {
  resource: "newsletter",
  getOne: async ({ id }) =>
    getAxiosInstance()
      .get<Newsletter>("/newsletters/" + id)
      .then((response) => response.data),

  getList: async () =>
    getAxiosInstance()
      .get<Newsletter[]>("/newsletters")
      .then((response) => response.data),
  saveOrUpdate: async ({ meta, data }) => {
    if (meta?.mutationType === "CREATE") {
      return getAxiosInstance()
        .post<Newsletter>("/newsletters", data)
        .then((response) => response.data);
    } else {
      return getAxiosInstance()
        .put<Newsletter>("/newsletters", data)
        .then((response) => response.data);
    }
  },
  delete: async ({ id }) => {
    return getAxiosInstance()
      .delete<Newsletter>("/newsletters/" + id)
      .then((response) => response.data);
  },
};
