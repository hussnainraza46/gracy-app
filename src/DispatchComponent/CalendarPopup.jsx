import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function CalendarPopup({ onClose, onSelect, selectedDate }) {
    const [current, setCurrent] = useState(new Date(selectedDate));

    const monthName = current.toLocaleString("default", { month: "long" });
    const year = current.getFullYear();

    const daysInMonth = new Date(year, current.getMonth() + 1, 0).getDate();
    const firstDayIndex = new Date(year, current.getMonth(), 1).getDay();

    const changeMonth = (dir) => {
        const newDate = new Date(current);
        newDate.setMonth(newDate.getMonth() + dir);
        setCurrent(newDate);
    };

    const isSameDate = (d1, d2) =>
        d1.getDate() === d2.getDate() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getFullYear() === d2.getFullYear();

    const tempSelected = selectedDate;

    return (
        <div className="calender absolute top-[50px] left-20 bg-white shadow-lg rounded-xl p-4 w-[450px] z-50">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
                <button
                    className="p-2 cursor-pointer"
                    onClick={() => changeMonth(-1)}
                >
                    <img src="/icons/Buttons-control.png" alt="" />
                </button>

                <p className="font-medium text-lg">
                    {monthName} {year}
                </p>

                <button
                    className="p-2 cursor-pointer"
                    onClick={() => changeMonth(1)}
                >
                    <img src="/icons/Button-control-right.png" alt="" />
                </button>
            </div>

            {/* Week Days */}
            <div className="grid grid-cols-7 flex justify-around  text-center text-[#8E8E8E] mb-2 text-sm">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 text-center gap-2 mb-3">
                {Array(firstDayIndex)
                    .fill("")
                    .map((_, i) => (
                        <div key={"empty-" + i}></div>
                    ))}

                {Array.from({ length: daysInMonth }, (_, i) => {
                    const dateObj = new Date(year, current.getMonth(), i + 1);
                    const isSelected = isSameDate(dateObj, tempSelected);

                    return (
                        <button
                            key={i}
                            className={`p-2 rounded-full text-sm
                                ${isSelected
                                    ? "bg-gradient-to-r from-[#8297F2] to-[#D1A2D8] text-white"
                                    : "hover:bg-[#F4F4F4]"} 
                            `}
                            onClick={() => onSelect(dateObj)}
                        >
                            {i + 1}
                        </button>
                    );
                })}
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 border-t border-gray-300 pt-3">
                <button
                    className="px-4 py-2 rounded-lg border text-[#6D6D6D]"
                    onClick={onClose}
                >
                    Cancel
                </button>
                <button
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#8297F2] to-[#D1A2D8] text-white"
                    onClick={() => onClose()}
                >
                    Select
                </button>
            </div>
        </div>
    );
}
