import React, { useState } from "react";
import { BARCHARTDATA } from "../../utils/constatnts";

const TABS = [
  { id: 0, label: "Revenue" },
  { id: 1, label: "Orders" },
  { id: 2, label: "Customers" },
];

const BarChartTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const chartData = BARCHARTDATA[activeTab];

  // Find max value for scaling
  const maxValue = Math.max(...chartData.months.map((m) => m.value));
  // Calculate Y-axis steps (e.g., 5 steps)
  const steps = 5;
  const stepValue = Math.ceil(maxValue / steps / 100) * 100; // round to nearest 100
  const yLabels = Array.from({ length: steps + 1 }, (_, i) => i * stepValue);
  
  return (
    <div className="w-full bg-gray-100 dark:bg-black rounded-2xl shadow p-4 border border-gray-200 dark:border-gray-700 ">
      <div className="w-[310px] justify-center flex space-x-4 mb-4 border border-gray-300  dark:border-gray-700 rounded-xl">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-xl font-semibold transition-colors duration-200 ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : " text-gray-600 dark:text-gray-200 "
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex  h-64 items-end ">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between h-full mr-2 py-2">
          {yLabels.slice().reverse().map((label, idx) => (
            <span key={idx} className="text-xs text-gray-400" style={{ height: `${180 / steps}px` }}>
              {label}
            </span>
          ))}
        </div>
        {/* Bars */}
        <div className="flex items-end w-full h-full  overflow-hidden overflow-x-auto max-sm:gap-3 max-sm:px-2">
          {chartData.months.map((month, idx) => (
            <div key={month.month} className="flex flex-col items-center flex-1">
              <div
                className="w-8 rounded-t bg-blue-500 transition-all duration-300"
                style={{
                  height: `${(month.value / (steps * stepValue)) * 180}px`,
                  minHeight: "8px",
                }}
                title={`${month.month}: ${month.value}`}
              ></div>
              <span className="text-xs mt-1 text-gray-500 rotate-[-30deg]">
                {month.month.slice(0, 3)}
              </span>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default BarChartTabs; 