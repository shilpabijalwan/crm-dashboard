import React from "react";
import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiCalendar,
  FiPlus,
  FiChevronDown,
} from "react-icons/fi";

const AccountInfoCard = () => {
  const [addPhoneNumber,setAddPhoneNumber]=useState([])
  return (
    <div className="mt-2 p-6 w-full max-w-md ">
      {/* Header */}
      <div className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center gap-4 w-full">
          <div className="relative">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
              TG
            </div>
            {/* <span className="absolute bottom-1 -right-1 text-xs text-blue-500 cursor-pointer">
              Edit
            </span> */}
          </div>
          <div className="flex flex-col w-full py-2 gap-3">
            <div className="flex text-lg font-semibold text-gray-800 dark:text-white justify-between">
              <div className="flex gap-2 text-xs mt-1 text-gray-600 dark:text-gray-400">
                <p className="font-semibold text-gray-800 dark:text-white">
                  Truck Grear
                </p>
                <span className="bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  BUSINESS
                </span>
              </div>
              <button className="text-sm text-blue-600 hover:underline">
                Change Status
              </button>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-300">
              jillali@onechanneladmin.com
            </div>
          </div>
        </div>
      </div>

      {/* Action Icons */}
      <div className="grid grid-cols-4 gap-2 mt-6 text-center text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg px-1 py-6 bg-white dark:bg-gray-900">
        <div className="cursor-pointer hover:text-blue-500 border-r border-gray-300 dark:border-gray-700 pr-2">
          <FiMail className="mx-auto mb-1" />
          <div className="text-xs">Email</div>
        </div>
        <div className="cursor-pointer hover:text-blue-500 border-r border-gray-300 dark:border-gray-700 pr-2">
          <FiPhone className="mx-auto mb-1" />
          <div className="text-xs">Call</div>
        </div>
        <div className="cursor-pointer hover:text-blue-500 border-r border-gray-300 dark:border-gray-700 pr-2">
          <FiMessageCircle className="mx-auto mb-1" />
          <div className="text-xs">Message</div>
        </div>
        <div className="cursor-pointer hover:text-blue-500">
          <FiCalendar className="mx-auto mb-1" />
          <div className="text-xs">Calendar</div>
        </div>
      </div>

      {/* Form Section business details */}
      <div className="mt-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-white">
            Business Details
          </h3>
          <button className="flex items-center gap-1 text-green-600 text-sm font-medium hover:underline">
            <FiCalendar className="text-green-600" />
            Save & Close
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-500">Account Name</label>
            <input
              type="text"
              value="TRUCK GREAR"
              className="w-full mt-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500">Email</label>
            <input
              type="email"
              value="Jillali@Onechanneladmin.Com"
              className="w-full mt-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Phone Numbers */}
          <div>
            <label className="text-xs text-gray-500">Phone Number</label>
            {addPhoneNumber?.map((_, idx) => (
              <div key={idx} className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1 border rounded px-2 py-1 text-sm">
                  🇺🇸 <FiChevronDown />
                </div>
                <input
                  type="text"
                  value="+1 344 434 4455"
                  className="flex-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                <button className="px-3 py-1 text-sm text-red-500 border border-red-500 rounded hover:bg-red-100 dark:hover:bg-red-800">
                  Remove
                </button>
              </div>
            ))}
            <button className="flex items-center gap-1 text-blue-600 text-sm mt-2">
              <FiPlus /> Add Phone
            </button>
          </div>

          {/* Contact Owner */}
          <div>
            <label className="text-xs text-gray-500">Contact Owner</label>
            <div className="flex items-center justify-between border mt-1 px-3 py-2 rounded dark:bg-gray-800 dark:border-gray-700">
              <span className="text-sm text-gray-800 dark:text-white">
                Suchithkumar@Onechanneladmin.com
              </span>
              <FiChevronDown className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoCard;
