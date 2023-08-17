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

const inflowData: string[] = [
  "N100M",
  "N200M",
  "N150M",
  "N300M",
  "N350M",
  "N180M",
  "N350M",
  "N400M",
  "N280M",
  "N320M",
  "N280M",
  "N200M",
];

const outflowData: string[] = [
  "N100M",
  "N150M",
  "N100M",
  "N200M",
  "N180M",
  "N120M",
  "N300M",
  "N350M",
  "N250M",
  "N280M",
  "N240M",
  "N180M",
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
    <div className="bg-white w-full border border-[#E7E8E7] rounded-2xl p-8">
      <Line data={data} options={options} />
    </div>
  );
};

export default DashboardChart;
