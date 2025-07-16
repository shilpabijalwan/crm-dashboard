import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

function Cards({ title, total }) {
  const [theme, setTheme] = useState(null);
  const themeRef = useRef(null);
  useEffect(() => {
    themeRef.current = localStorage.getItem("theme");
    console.log(themeRef.current);
    setTheme();
  }, [themeRef.current]);

  return (
    <div className="pt-3 border border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-100 dark:bg-black">
      <div className="flex items-center px-5 pb-3 w-[250px]">
        <img
          src={themeRef.current === "dark" ? "svgs/dark.svg" : "svgs/light.svg"}
          alt=""
          className="w-10 h-10"
        />
        <div className="ml-4 flex flex-col items-start">
          <p className="text-sm text-gray-800 dark:text-gray-200">{title}</p>
          <p className="text-lg font-semibold mt-1 text-gray-900 dark:text-white">
            {total}
          </p>
        </div>
      </div>
      <div className="flex justify-between px-5 py-3 items-center text-xs text-gray-600 dark:text-gray-400 mt-3 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-2xl">
        <p>28%</p>
        <p>from the last month</p>
      </div>
    </div>
  );
}

export default Cards;
