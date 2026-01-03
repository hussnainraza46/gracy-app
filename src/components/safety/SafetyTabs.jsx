import React from "react";


export default function SafetyTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-10 border-b border-gray-300">
      <button
        onClick={() => setActiveTab("general")}
        className={`pb-2 text-[md] font-medium border-b-2 ${
          activeTab === "general"
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500"
        }`}
      >
       Overview
      </button>

      <button
        onClick={() => setActiveTab("data")}
        className={`pb-2 text-[md] font-medium border-b-2 ${
          activeTab === "data"
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500"
        }`}
      >
        Driver Performance
      </button>

      <button
        onClick={() => setActiveTab("access")}
        className={`pb-2 text-[md] font-medium border-b-2 ${
          activeTab === "access"
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500"
        }`}
      >
        Coaching Performance
      </button>

      <button
        onClick={() => setActiveTab("compliance")}
        className={`pb-2 text-[md] font-medium border-b-2 ${
          activeTab === "compliance"
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500"
        }`}
      >
        Event Resolution
      </button>
    </div>
  );
}
