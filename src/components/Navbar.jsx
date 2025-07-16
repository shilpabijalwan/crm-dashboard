import React, { useState, useEffect, useLayoutEffect } from "react";
import { FiSearch, FiBell, FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [theme, setTheme] = useState(null);

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
    setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  };

  return (
    <header className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between">
      {/* Left: Search Bar */}
      <div className="w-100 flex items-center gap-4  dark:border-gray-700 rounded-lg px-3 py-2">
        <img src="svgs/logo.svg" alt="" />
        <h1 className="text-lg font-semibold dark:text-gray-200">Quotients</h1>
      </div>
      {/* Center: Search Input */}
      <div className="w-150 flex items-center gap-4 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2">
        <FiSearch className="text-gray-500 dark:text-gray-300" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none text-sm text-gray-700 dark:text-gray-200"
        />
      </div>

      {/* Right: Notifications, Theme Toggle, User */}
      <div className="flex items-center gap-6">
        <FiBell className="text-gray-500 dark:text-gray-300 text-xl cursor-pointer" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Mavery Sharma
          </span>
          <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-200 flex items-center justify-center dark:text-gray-800">
            MK
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
