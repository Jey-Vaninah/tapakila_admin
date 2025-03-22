import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Currency } from "./types";
import { getAxiosInstance } from "../config/axios";

export const currencyProvider: ResourceProvider<Currency> = {
  resource: "currency",
  getOne: async ({ id }) =>
    getAxiosInstance()
      .get<Currency>("/currencies/" + id)
      .then((response) => response.data),

  getList: async () =>
    getAxiosInstance()
      .get<Currency[]>("/currencies")
      .then((response) => response.data),
  saveOrUpdate: async ({ meta, data }) => {
    if (meta?.mutationType === "CREATE") {
      return getAxiosInstance()
        .post<Currency>("/currencies" + "/save", data)
        .then((response) => response.data);
    } else {
      return getAxiosInstance()
        .put<Currency>("/currencies" + "/save", data)
        .then((response) => response.data);
    }
  },
  delete: async ({ id }) => {
    return getAxiosInstance()
      .delete<Currency>("/currencies" + "/delete" + id)
      .then((response) => response.data);
  },
};
