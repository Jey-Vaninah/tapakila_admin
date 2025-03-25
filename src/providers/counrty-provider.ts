import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Country } from "./types";
import { getAxiosInstance } from "../config/axios";

export const countryProvider: ResourceProvider<Country> = {
  resource: "country",
  getOne: async ({ id }) =>
    getAxiosInstance()
      .get<Country>("/countries/" + id)
      .then((response) => response.data),

  getList: async () =>
    getAxiosInstance()
      .get<Country[]>("/countries")
      .then((response) => response.data),
  saveOrUpdate: async ({ meta, data }) => {
    if (meta?.mutationType === "CREATE") {
      return getAxiosInstance()
        .post<Country>("/countries/", data)
        .then((response) => response.data);
    } else {
      return getAxiosInstance()
        .put<Country>("/countries/", data)
        .then((response) => response.data);
    }
  },
  delete: async ({ id }) => {
    return getAxiosInstance()
      .delete<Country>("/countries/" + id)
      .then((response) => response.data);
  },
};
