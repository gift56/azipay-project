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

const inflowData = [
  1000, 1500, 1300, 1800, 2000, 1600, 2200, 2400, 1900, 2100, 1800, 2200,
];

const outflowData = [
  1000, 1300, 1100, 1500, 1600, 1300, 1800, 2000, 1500, 1700, 1400, 1600,
];

export const data: any = {
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
    <div className="bg-white w-full border border-[#E7E8E7] rounded-2xl p-8 hidden lg:flex flex-col">
      <h2 className="text-2xl font-bold text-[#219653]">N1,567,552</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default DashboardChart;
