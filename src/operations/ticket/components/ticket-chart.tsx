import { FC, useState, useMemo } from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
} from "chart.js";
import { groupTicketsByPrice, TicketGroup } from "../utils/group-tickets";
import { Ticket } from "../../../providers";
import { TextField, MenuItem } from "@mui/material";

ChartJS.register(Title, Tooltip, Legend, LinearScale, PointElement);

type Props = {
  tickets: Ticket[];
};

const TicketPriceVsSalesScatterPlot: FC<Props> = ({ tickets }) => {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  // Filtrage des tickets par année
  const filteredTickets = useMemo(
    () =>
      tickets.filter(
        (ticket) => new Date(ticket.createdAt).getFullYear() === selectedYear
      ),
    [tickets, selectedYear]
  );

  // Regroupement des tickets par prix
  const ticketGroups: TicketGroup[] = useMemo(
    () => groupTicketsByPrice(filteredTickets),
    [filteredTickets]
  );

  const availableTicket = Math.max(
    ...tickets.map((ticket) => parseInt(ticket.ticketType.availableTicket, 10))
  );
  const maxYValue = availableTicket / 2;

  // Construction des dataPoints avec les prix comme axe X
  const dataPoints = ticketGroups.map((group) => {
    const price = group.price; // Conversion du prix en nombre
    return {
      x: price, // Prix des tickets comme axe X
      y: group.count, // Nombre de tickets vendus à ce prix
    };
  });

  const data = {
    datasets: [
      {
        label: "Ventes de tickets",
        data: dataPoints,
        backgroundColor: "#4CAF50",
        borderColor: "#388E3C",
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `Prix: ${context.raw.x}€ - Tickets vendus: ${context.raw.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "linear" as const,
        position: "bottom" as const,
        title: {
          display: true,
          text: "Prix des tickets (€)",
        },
        ticks: {
          stepSize: 1, // Ajuste la taille des pas selon tes besoins
        },
      },
      y: {
        type: "linear" as const,
        title: {
          display: true,
          text: "Nombre de tickets vendus",
        },
        min: 0,
        max: maxYValue,
        ticks: {
          stepSize: 5, // Valeurs comme 0, 5, 10, 15, ...
        },
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h3>Relation entre le prix des tickets et le nombre de tickets vendus</h3>
      <TextField
        select
        label="Année"
        value={selectedYear}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
        variant="outlined"
        size="small"
        style={{ marginBottom: 20 }}
      >
        {[
          ...new Set(
            tickets.map((ticket) => new Date(ticket.createdAt).getFullYear())
          ),
        ]
          .sort((a, b) => b - a)
          .map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
      </TextField>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default TicketPriceVsSalesScatterPlot;
