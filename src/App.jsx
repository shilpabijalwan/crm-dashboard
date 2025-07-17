import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AccountInfoCard from "./components/AccountInfoCard";
import RightSection from "./components/RightSection/RightSection";

function App() {
  return (
    <div className="bg-white w-full flex flex-col  min-h-screen dark:bg-gray-900 dark:bg-gray-800">
      <Navbar />
      <div className="flex bg-gray-100 dark:bg-black p-3 gap-8 max-sm:flex-col">
        <AccountInfoCard />
        <RightSection />
      </div>
    </div>
  );
}

export default App;
