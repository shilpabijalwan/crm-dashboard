import React, { useState } from "react";
import { TABS } from "../../utils/constatnts";

function TabBar() {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveComponent = TABS[activeTab].component;

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-4  ">
        {TABS.map((tab, idx) => (
          <div
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`
             px-6 py-2 text-sm border items-center cursor-pointer
              transition-all duration-200 border-gray-300 
              ${
                activeTab === idx
                  ? "active-tab text-purple-400 rounded-t-xl bg-white dark:bg-gray-900 z-10 border-b-white dark:border-gray-700"
                  : "text-gray-900 border mt-2 hover:mt-0 rounded-t-xl active-tab dark:text-gray-200 dark:border-gray-700"
              }
            `}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="p-4 border-gray-700 border-t border-l border-r border-b bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 ">
        <ActiveComponent />
      </div>
    </div>
  );
}

export default TabBar;
