import { ORDERSTATUS } from "../../utils/constatnts";

export const OrderStatusCard = ({ title = "Orders Status" }) => {
  return (
    <div className="w-full border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-black">
      {/* Header */}
      <div className="flex items-center p-4 justify-between">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </p>
        <div className="flex items-center gap-2">
          <select className="border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-black focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400">
            {["All Categories", "New", "Pending", "Dispatched"].map((item) => (
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
      <div className="flex gap-4 px-5 py-4 border-t border-gray-300 dark:border-gray-700">
        <div className="grid grid-cols-2 gap-4 px-5 py-4">
          {ORDERSTATUS.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {order.count}
                </span>
                <span className="capitalize text-sm text-gray-600 dark:text-gray-400">
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {/* Replace with real chart later */}
          chart
        </div>
      </div>
    </div>
  );
};
