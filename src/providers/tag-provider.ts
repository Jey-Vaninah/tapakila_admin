import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Tag } from "./types";
import { getAxiosInstance } from "../config/axios";

export const tagProvider: ResourceProvider<Tag> = {
  resource: "tag",
  getOne: async ({ id }) =>
    getAxiosInstance()
      .get<Tag>("/tags/" + id)
      .then((response) => response.data),

  getList: async () =>
    getAxiosInstance()
      .get<Tag[]>("/tags")
      .then((response) => response.data),
  saveOrUpdate: async ({ meta, data }) => {
    if (meta?.mutationType === "CREATE") {
      return getAxiosInstance()
        .post<Tag>("/tags", data)
        .then((response) => response.data);
    } else {
      return getAxiosInstance()
        .put<Tag>("/tags", data)
        .then((response) => response.data);
    }
  },
  delete: async ({ id }) => {
    return getAxiosInstance()
      .delete<Tag>("/tags/" + id)
      .then((response) => response.data);
  },
};
