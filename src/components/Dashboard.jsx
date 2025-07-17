import React from "react";
import { DASHBOARD_CONTENT } from "../utils/constatnts";
import Cards from "./RightSection/Cards";
import { OrderStatusCard } from "./RightSection/OrderStatusCard";
import RecentOrder from "./RightSection/RecentOrder";
import BarChartTabs from "./RightSection/BarChartTabs";

function Dashboard() {
  return (
    <>
      <div className="w-full flex gap-4 overflow-hidden overflow-x-auto hide-scrollbar">
        {DASHBOARD_CONTENT.map((content, index) => (
          <div
            key={index}
            className="flex-1 border-gray-200 rounded-2xl bg-gray-100 dark:bg-black dark:border-gray-700"
          >
            <Cards {...content} />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-1 gap-4 mt-5 dark:bg-gray-900 dark:border-gray-700 max-sm:flex-col">
        <OrderStatusCard />
        <OrderStatusCard title="Sales Status" />
      </div>
      <div className="mt-5 w-full ">
        <RecentOrder />
      </div>
      <div className="mt-5 w-full ">
      <BarChartTabs />
      </div>
    </>
  );
}

export default Dashboard;

/* Hide scrollbar for Chrome, Safari and Opera */

