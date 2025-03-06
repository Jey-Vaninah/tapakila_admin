import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Event } from "./types";

export const eventProvider: ResourceProvider<Event> = {
  resource: "event",
  getList: async () => {
    return Promise.resolve([
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
      },
    ]);
  },
};
