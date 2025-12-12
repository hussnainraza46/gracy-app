// components/TimeGrid.jsx
import React from "react";

export default function TimeGrid() {
    const hours = [
        "12 AM", " ", "1 AM", "", "2 AM", "",
        "3 AM", "", "4 AM", "", "5 AM", "", "6 AM", "", "7 AM"
        , "", "8 AM", "", "9 AM", ""
    ];

    return (
        <div className="w-full  border-gray-200">
            {hours.map((time, index) => (
                <div key={index} className="flex items-center">
                    {/* Time Label: show only on even rows */}
                    <div className="w-[70px] text-[12px] text-gray-500 py-4">
                        {index % 2 === 0 ? time : ""}
                    </div>

                    {/* Line */}
                    <div className="flex-1 border-b border-gray-200"></div>
                </div>
            ))}
        </div>
    );
}



