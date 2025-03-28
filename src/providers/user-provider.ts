import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { User } from "./types";
import { getAxiosInstance } from "../config/axios";

export const userProvider: ResourceProvider<User> = {
  resource: "user",
  getOne: async ({ id }) =>
    getAxiosInstance()
      .get<User>("/users/" + id)
      .then((response) => response.data),
  getList: async () =>
    getAxiosInstance()
      .get<User[]>("/users/")
      .then((response) => response.data),
  saveOrUpdate: async ({ meta, data }) => {
    if (meta?.mutationType === "CREATE") {
		console.log(data);
      return getAxiosInstance()
        .post<User>("/users/", data)
        .then((response) => response.data);
    } else {
		console.log(data);
      return getAxiosInstance()
        .put<User>("/users/", data)
        .then((response) => response.data);
    }
  },
  delete: async ({ id }) => {
    return getAxiosInstance()
      .delete<User>("/users/" + id)
      .then((response) => response.data);
  },
};
