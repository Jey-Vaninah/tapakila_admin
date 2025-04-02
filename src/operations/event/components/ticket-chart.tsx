import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from "chart.js";

// Enregistrement des composants nécessaires pour Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Définition des types pour les props
interface TicketsPieChartProps {
  soldTickets: number;
  availableTickets: number;
}

const TicketsPieChart: React.FC<TicketsPieChartProps> = ({
  soldTickets,
  availableTickets,
}) => {
  const data = {
    labels: ["Tickets Vendus", "Tickets Disponibles"],
    datasets: [
      {
        data: [soldTickets, availableTickets],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF4365", "#2492D3"],
      },
    ],
  };

  // Correct typage des options de chart.js
  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Cette valeur doit être dans les types acceptés
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.raw} tickets`,
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default TicketsPieChart;
