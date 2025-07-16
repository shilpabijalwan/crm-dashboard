import React from "react";
import { CONTACT_OWNER } from "../utils/constatnts";

function OptionsComponent({ setFormData, formData }) {
  return (
    <div>
      <label className="text-xs text-gray-500">Contact Owner</label>
      <div className="flex items-center justify-between  border border-gray-200  mt-1 px-3 py-2 rounded dark:bg-gray-800 dark:border-gray-700">
        <select
          name="contactOwner"
          className="w-full text-md text-gray-900 dark:text-gray-200 focus:outline-none border-none bg-transparent"
          value={formData.contactOwner}
          onChange={(e) =>
            setFormData({ ...formData, contactOwner: e.target.value })
          }
        >
          {CONTACT_OWNER?.map((owner) => (
            <option
              value={owner.email}
              key={owner.id}
              className="p-6 text-sm text-gray-900 dark:text-gray-200 w-full  bg-white dark:bg-gray-800 "
            >
              {owner?.email}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default OptionsComponent;
