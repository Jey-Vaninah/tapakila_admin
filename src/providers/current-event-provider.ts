import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Event } from "./types";
import { getAxiosInstance } from "../config/axios";

export const currentEventProvider: ResourceProvider<Event> = {
  resource: "current-event",
  getList: async () => {
    const allEvents = await getAxiosInstance()
      .get<Event[]>("/events")
      .then((response) => response.data);
    allEvents.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return allEvents.slice(0, 3);
  },
};
