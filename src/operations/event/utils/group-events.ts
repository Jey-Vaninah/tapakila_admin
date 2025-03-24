import { Event } from "../../../providers";

export type EventGroup = {
  year: number;
  month: number;
  count: number;
};

export const groupEvents = (events: Event[]): EventGroup[] => {
  const grouped = events.reduce(
    (acc, event) => {
      const year = new Date(event.startDate).getFullYear();
      const month = new Date(event.startDate).getMonth() + 1;

      const key = `${year}-${month}`;
      if (!acc[key]) {
        acc[key] = { year, month, count: 0 };
      }
      acc[key].count++;

      return acc;
    },
    {} as Record<string, EventGroup>
  );

  return Object.values(grouped);
};
