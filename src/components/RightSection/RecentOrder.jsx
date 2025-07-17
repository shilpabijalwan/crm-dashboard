import React, { useState } from "react";
import { RECENTORDERS } from "../../utils/constatnts";

const RecentOrder = () => {
  const [showAll, setShowAll] = useState(false);
  const ordersToShow = showAll ? RECENTORDERS : RECENTORDERS.slice(0, 5);
  return (
    <div className="overflow-x-auto bg-gray-100 dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-700">
      <table className="min-w-full bg-gray-100 dark:bg-black border-collapse">
      <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-gray-100 dark:text-white dark:bg-black">
          Recent Orders
        </caption>
        <thead>
          <tr className="bg-white dark:bg-gray-900">
            <th className="py-2 px-4 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200">Product Name</th>
            <th className="py-2 px-4 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200">Order Status</th>
            <th className="py-2 px-4 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200">Order Total</th>
            <th className="py-2 px-4 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200">Channel</th>
            <th className="py-2 px-4 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200">Customer Name</th>
            <th className="py-2 px-4 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200">Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {ordersToShow.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="py-2 px-4 border border-gray-200 dark:border-gray-700">{order.productName}</td>
              <td className="py-2 px-4 border border-gray-200 dark:border-gray-700">{order.orderStatus}</td>
              <td className="py-2 px-4 border border-gray-200 dark:border-gray-700">{order.orderTotal}</td>
              <td className="py-2 px-4 border border-gray-200 dark:border-gray-700">{order.channel}</td>
              <td className="py-2 px-4 border border-gray-200 dark:border-gray-700">{order.customerName}</td>
              <td className="py-2 px-4 border border-gray-200 dark:border-gray-700">{order.deliveryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!showAll && RECENTORDERS.length > 5 && (
        <div className="flex justify-center p-4">
          <button
            className="px-4 py-2 rounded cursor-pointer transition text-blue-600"
            onClick={() => setShowAll(true)}
          >
           view ({RECENTORDERS.length-5 }) more orders
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentOrder;
