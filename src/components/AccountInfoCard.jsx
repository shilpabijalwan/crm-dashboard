import React, { useEffect, useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiCalendar,
  FiPlus,
  FiChevronDown,
} from "react-icons/fi";
import { getInitials } from "../utils";
import { CONTACT_OWNER, COUNTRY_CODES } from "../utils/constatnts";
import OptionsComponent from "./OptionsComponent";

const DEFAULT_FORM = {
  accountName: "Default Account",
  email: "defaultAccount@example.com",
  phoneNumbers: [],
  contactOwner: "",
};

const AccountInfoCard = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [saveBussinessDetails, setSaveBussinessDetails] = useState(null);
  const [initials, setInitials] = useState("");
  const [isBussinessDetails, setIsBussinessDetails] = useState(false);

  // Load saved data on mount
  useEffect(() => {
    const saved = localStorage.getItem("accountInfo");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSaveBussinessDetails(parsed);
    }
  }, []);

  // When saved data updates, update form + initials
  useEffect(() => {
    if (!saveBussinessDetails) return;

    setFormData({
      accountName: saveBussinessDetails.accountName || DEFAULT_FORM.accountName,
      email: saveBussinessDetails.email || DEFAULT_FORM.email,
      phoneNumbers: saveBussinessDetails.phoneNumbers || [],
      contactOwner: saveBussinessDetails.contactOwner || "",
    });

    setInitials(
      getInitials(saveBussinessDetails.accountName || DEFAULT_FORM.accountName)
    );
  }, [saveBussinessDetails]);

  // Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Save form data to localStorage and update state
  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("accountInfo", JSON.stringify(formData));
    setSaveBussinessDetails(formData);
    console.log(e);
    if (e.type === "submit") {
      setIsBussinessDetails(false);
    }
    alert("Business details saved successfully!");
  };

  const handlePhoneChange = (value, idx) => {
    const updatedPhones = [...formData.phoneNumbers];
    updatedPhones[idx] = value;
    setFormData({ ...formData, phoneNumbers: updatedPhones });
  };
  // Remove phone number handler
  const handlePhoneRemove = (e, idx) => {
    e.preventDefault();
    const updatedPhones = formData.phoneNumbers.filter((_, i) => i !== idx);
    setFormData({ ...formData, phoneNumbers: updatedPhones });
  };

  // Add phone number handler
  const handleAddPhone = (e) => {
    e.preventDefault();
    if (formData.phoneNumbers.length >= 3) return; // Limit to 3 phone numbers
    // else Add a new empty phone number field
    setFormData({ ...formData, phoneNumbers: [...formData.phoneNumbers, ""] });
  };

  return (
    <div className="mt-2 w-full max-w-md ">
      {/* Header */}
      <div className=" flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-lg  py-3 bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center gap-4 w-full px-2 justify-between">
          <div className="relative w-20 h-20 mx-auto">
            {/* Avatar Circle */}
            <div className="w-20 h-20 bg-[#5B43D6] rounded-full flex flex-col items-center justify-end overflow-hidden shadow-md">
              <div className="flex-1 flex items-center justify-center w-full">
                <span className="text-white text-2xl font-bold">{initials}</span>
              </div>
              {/* Edit label inside the circle */}
              <div className="w-full bg-[#4733a6] bg-opacity-90 text-white text-center text-md py-1 font-medium"
              onClick={()=>setIsBussinessDetails(true)}
              >Edit</div>
            </div>
            {/* Status Dot */}
            <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full border-4 border-white bg-green-500"></span>
          </div>
          <div className="flex flex-col w-full gap-3">
            <div className="flex text-lg font-semibold text-gray-800 dark:text-white justify-between ">
              <div className="flex gap-2 text-xs mt-1 text-gray-600 dark:text-gray-400 rounded ">
                <p className="font-semibold text-gray-800 dark:text-white truncate max-w-[100px] ">
                  {saveBussinessDetails?.accountName || ""}
                </p>
                <span className="bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  BUSINESS
                </span>
              </div>
              <button className="cursor-pointer text-sm text-blue-600">
                Change Status
              </button>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-300 truncate">
              {saveBussinessDetails?.email}
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

      {isBussinessDetails && 
      ( <div className="mt-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
        <form action="" onSubmit={handleFormSubmit}>
        
           
        
                <div className="flex items-center justify-between mb-2">
               <h3 className="text-sm font-semibold text-gray-700 dark:text-white">
               Business Details
             </h3>
              <button
                type="submit"
                className="flex items-center gap-1 text-green-600 text-sm font-medium"
              >
                <FiCalendar className="text-green-600" />
                Save & Close
              </button>
          </div>
            {/* )} */}
          {/* {isBussinessDetails && ( */}
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500">Account Name</label>
                <input
                  type="text"
                  name="accountName"
                  value={formData.accountName}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800
                   dark:text-white
                   
                   "
                />
              </div>
              <div>
                <label className="text-xs text-gray-500">Email</label>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={formData.email}
                  className=" w-full mt-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Phone Numbers */}
              <div>
                <label className="text-xs text-gray-500">Phone Number</label>
                {formData.phoneNumbers?.map((_, idx) => (
                  <div key={idx} className="flex items-center gap-2 mt-2">
                    <select className="flex items-center gap-1 border rounded px-2 py-2 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                      {COUNTRY_CODES.map((country) => (
                        <option
                          key={country.code}
                          value={country.code}
                          className="text-sm z-10 "
                        >
                          {country.flag}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name={`phoneNumbers[${idx}]`}
                      value={formData.phoneNumbers[idx] || ""}
                      onChange={(e) => {
                        const newPhoneNumbers = [...formData.phoneNumbers];
                        newPhoneNumbers[idx] = e.target.value;
                        setFormData({
                          ...formData,
                          phoneNumbers: newPhoneNumbers,
                        });
                      }}
                      className="flex-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                    <button
                      className="cursor-pointer px-3 py-2 text-sm text-gray-900 border border-red-500 rounded dark:text-gray-200"
                      onClick={(e) => handlePhoneRemove(e, idx)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  className="flex items-center gap-1 text-blue-600 text-sm mt-2"
                  onClick={handleAddPhone}
                >
                  <FiPlus /> Add Phone
                </button>
              </div>

              {/* Contact Owner */}
              <OptionsComponent setFormData={setFormData} formData={formData} />
            </div>
        </form>
      </div>
          )}
    </div>
  );
};

export default AccountInfoCard;
