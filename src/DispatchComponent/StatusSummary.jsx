import React from "react";

export default function StatusSummary() {
  const items = [
    { label: "Completed", count: 0, color: "#4CAF50" },   // Green
    { label: "Will Call", count: 0, color: "#0A6CFF" },   // Blue
    { label: "Canceled", count: 0, color: "#F44336" },    // Red
    { label: "On Time", count: 0, color: "#FF9800" },     // Orange
    { label: "delayed", count: 0, color: "#F7C600" },     // Yellow
    { label: "Assigened", count: 0, color: "#FF3F7F" },   // Pink
  ];

  return (
    <div className="bg-white rounded-xl  p-4 w-fit">
      <div className="grid grid-cols-3 gap-y-4 gap-x-8">

        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>

            <span className="text-[14px] text-black">
              {item.count} {item.label}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}
