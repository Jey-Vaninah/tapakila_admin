import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Event, Status } from "./types";

let EVENTS: Event[] = [
  {
    id: "1",
    event_hall_id: "STADEF123",
    host_id: "PNL_OFFICIEL",
    user_id: "FAN001",
    title: "Concert PNL - Stade de France",
    slug: "concert-pnl-2025-stade-de-france",
    description:
      "Le duo légendaire PNL en live au Stade de France pour une soirée inoubliable.",
    start_date: new Date("2025-07-15"),
    start_time: "20:00:00",
    end_date: new Date("2025-07-15"),
    end_time: "23:00:00",
    age_limit: "Tout public",
    create_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
    status: Status.PUBLISHED,
  },
];

export const eventProvider: ResourceProvider<Event> = {
  resource: "event",
  getOne: async ({ id }) => EVENTS.find((event) => event.id === id)!,
  getList: async () => Promise.resolve(EVENTS),
  saveOrUpdate: async ({ data, meta }) => {
    if (meta?.mutationType === "CREATE") {
      EVENTS.push(data as Event);
      return EVENTS.find((event) => event.id === data.id)!;
    } else {
      EVENTS = EVENTS.map((Event) => {
        return Event.id === data.id ? (data as Event) : Event;
      });
      return EVENTS.find((event) => event.id === data.id)!;
    }
  },
  delete: async ({ id }) => {
    const toDeleted = EVENTS.find((event) => {
      return event.id === id;
    });
    EVENTS = EVENTS.filter((event) => {
      return event.id !== id;
    });
    return toDeleted!;
  },
};
