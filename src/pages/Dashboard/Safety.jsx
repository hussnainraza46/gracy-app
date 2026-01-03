import React from "react";

import { useState } from "react";
import SafetyTabs from "../../components/safety/SafetyTabs";

import Overview from "../../components/safety/tabs/Overview";
import DriverPerformance from "../../components/safety/tabs/DriverPerformance";
import CoachingPerformance from "../../components/safety/tabs/CoachingPerformance";
import EventResolution from "../../components/safety/tabs/EventResolution";

export default function Safety() {
  const [activeTab, setActiveTab] = useState("general");
  return (
    <div className=' w-full overView gap-[20px] flex rounded-tl-[20px] bg-[#ffffff]  p-[20px] block'>
      <div className="p-6 h-full">
        <SafetyTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-6 h-full">
          {activeTab === "general" && <Overview />}
          {activeTab === "data" && <DriverPerformance />}
          {activeTab === "access" && <CoachingPerformance />}
          {activeTab === "compliance" && <EventResolution />}
        </div>
      </div>
    </div>
  )
}
