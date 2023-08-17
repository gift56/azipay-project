import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Inflow - Outflow",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Oct",
  "Nov",
  "Dec",
];

const inflowData = [100, 200, 150, 300, 250, 180, 350, 400, 280, 320, 280, 200];

const outflowData = [80, 150, 100, 200, 180, 120, 300, 350, 250, 280, 240, 180];

export const data = {
  labels,
  datasets: [
    {
      label: "Inflow",
      data: inflowData,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      cubicInterpolationMode: "monotone",
    },
    {
      label: "Outflow",
      data: outflowData,
      borderColor: "#44F189",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      cubicInterpolationMode: "monotone",
    },
  ],
};

const DashboardChart = () => {
  return (
    <div className="bg-white w-full border border-[#E7E8E7] rounded-2xl p-8">
      <Line data={data} options={options} />
    </div>
  );
};

export default DashboardChart;
