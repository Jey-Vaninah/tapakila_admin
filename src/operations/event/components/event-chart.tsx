import { FC, useState, useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { groupEvents, EventGroup } from "../utils/group-events";
import { Event } from "../../../providers";
import { TextField, MenuItem } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  events: Event[];
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EventDoughnutChart: FC<Props> = ({ events }) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);

  const filteredEvents: EventGroup[] = useMemo(
    () => groupEvents(events).filter((group) => group.year === selectedYear),
    [events, selectedYear]
  );

  const labels = months;
  const dataValues = Array(12).fill(0);

  filteredEvents.forEach((group) => {
    dataValues[group.month - 1] = group.count;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Number of Events",
        data: dataValues,
        backgroundColor: [
          "#4CAF50",
          "#FFC107",
          "#2196F3",
          "#FF5722",
          "#9C27B0",
          "#3F51B5",
          "#009688",
          "#E91E63",
          "#CDDC39",
          "#795548",
          "#607D8B",
          "#FF9800",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ textAlign: "center" }}>
      <TextField
        select
        label="Year"
        value={selectedYear}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
        variant="outlined"
        size="small"
        style={{ marginBottom: 20 }}
      >
        {[
          ...new Set(
            events.map((event) => new Date(event.startDate).getFullYear())
          ),
        ]
          .sort((a, b) => b - a)
          .map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
      </TextField>
      <Doughnut data={data} />
    </div>
  );
};

export default EventDoughnutChart;
