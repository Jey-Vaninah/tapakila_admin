import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Dummy } from "./types";

export const dummyProvider: ResourceProvider<Dummy> = {
  resource: "dummy",
  getList: async () => {
    return Promise.resolve([{ id: "id", name: "Value" }])
  }
}
