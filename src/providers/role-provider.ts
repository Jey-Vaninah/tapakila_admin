import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Role } from "./types";
import { getAxiosInstance } from "../config/axios";

export const roleProvider: ResourceProvider<Role> = {
  resource: "role",
  getOne: async ({ id }) =>
    getAxiosInstance()
      .get<Role>("/roles/" + id)
      .then((response) => response.data),

  getList: async () =>
    getAxiosInstance()
      .get<Role[]>("/roles")
      .then((response) => response.data),
  saveOrUpdate: async ({ meta, data }) => {
    if (meta?.mutationType === "CREATE") {
      return getAxiosInstance()
        .post<Role>("/roles/", data)
        .then((response) => response.data);
    } else {
      return getAxiosInstance()
        .put<Role>("/roles/", data)
        .then((response) => response.data);
    }
  },
  delete: async ({ id }) => {
    return getAxiosInstance()
      .delete<Role>("/roles/" + id)
      .then((response) => response.data);
  },
};
