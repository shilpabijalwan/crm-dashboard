import { useState } from "react";
import "./App.css";
import Topbar from "./components/TopBar";
import AccountInfoCard from "./components/AccountInfoCard";

function App() {
  return (
    <div className="bg-white w-full flex flex-col  min-h-screen dark:bg-gray-900 dark:bg-gray-800">
      <Topbar />
      <div className="bg-gray-100 dark:bg-black">
        <AccountInfoCard />
      </div>
    </div>
  );
}

export default App;
