import React, { useState, lazy, Suspense } from "react";
import { ORDERSTATUS } from "../../utils/constatnts";
// import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// Lazy load Doughnut
const Doughnut = lazy(() => import("react-chartjs-2").then(mod => ({ default: mod.Doughnut })));
ChartJS.register(ArcElement, Tooltip, Legend);

// Define colors for each status
const statusColors = {
  "All": "#6366F1",
  "New": "#8B5CF6",
  "Pending": "#A78BFA",
  "Dispatched": "#F59E42",
  "Delivered": "#22C55E",
  "Cancelled": "#EF4444",
};

const centerTextPlugin = {
  id: "centerText",
  afterDraw: (chart) => {
    const { ctx, chartArea: { width, height } } = chart;
    ctx.save();
    ctx.font = "bold 32px sans-serif";
    // Detect dark mode
    const isDark = document.documentElement.classList.contains("dark");
    ctx.fillStyle = isDark ? "#fff" : "#4B5563"; // #4B5563 is Tailwind gray-600
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
    ctx.fillText(total, width / 2, height / 2);
    ctx.restore();
  }
};

// Loader spinner component
const Loader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export const OrderStatusCard = ({ title = "Orders Status" }) => {
  const [selectedFilter, setSelectedFilter] = useState("All Categories");

  const filteredStatus =
    selectedFilter === "All Categories"
      ? ORDERSTATUS
      : ORDERSTATUS.filter((order) => order.status === selectedFilter);

  const chartData = {
    labels: filteredStatus.map((order) => order.status),
    datasets: [
      {
        data: filteredStatus.map((order) => order.count),
        backgroundColor: filteredStatus.map((order) => statusColors[order.status] || "#888"),
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="w-full border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-black">
      {/* Header */}
      <div className="flex items-center p-4 justify-between">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </p>
        <div className="flex items-center gap-2">
          <select
            className="border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-black focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            {["All Categories", "New", "Pending", "Dispatched", "Delivered", "Cancelled"].map((item) => (
              <option
                value={item}
                key={item}
                className="text-gray-600 dark:text-gray-400"
              >
                {item}
              </option>
            ))}
          </select>
          <p className="rounded-md px-4 py-1 text-lg font-semibold text-gray-600 dark:text-white border border-gray-300 dark:border-gray-700">
            2023
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="flex items-center gap-4 py-4 border-t border-gray-300 dark:border-gray-700 max-sm:flex-col">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-5 py-4 w-full">
          {filteredStatus.map((order) => (
            <div
              key={order.id}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-300 shadow dark:bg-gray-900"
            >
        
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">{order.count}</span>
                <div className="capitalize text-sm text-gray-900 dark:text-gray-400">{order.status}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center w-[180px] h-[180px] max-sm:w-[120px] max-sm:h-[120px]">
          <Suspense fallback={<Loader />}>
            <Doughnut
              data={chartData}
              options={{
                cutout: "70%",
                plugins: {
                  legend: { display: false },
                  tooltip: { enabled: true },
                },
              }}
              plugins={[centerTextPlugin]}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
