import {
    faChevronLeft,
    faChevronRight,
    faCalendar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CalendarPopup from "./CalendarPopup";

export default function DateNavigator() {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);
    const [showCalendar, setShowCalendar] = useState(false);

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = String(date.getFullYear()).slice(2);
        return `${day}/${month}/${year}`;
    };

    const isToday = (date) =>
        date.toDateString() === today.toDateString();

    const goPrevious = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() - 1);
        setCurrentDate(newDate);
    };

    const goNext = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + 1);
        setCurrentDate(newDate);
    };

    return (
        <div className="flex items-center gap-3 relative">
            <button onClick={goPrevious} className="px-2 py-2 bg-[#F6F7FB] rounded">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <input
                readOnly
                value={isToday(currentDate) ? "Today" : formatDate(currentDate)}
                className="bg-[#F6F7FB] px-2 py-2 rounded w-[100px] text-center"
            />

            <button onClick={goNext} className="px-2 py-2 bg-[#F6F7FB] rounded">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="px-2 py-2  rounded"
            >
                <img src="/icons/uit-calender.png" alt="" />
            </button>

            {showCalendar && (
                <CalendarPopup
                    selectedDate={currentDate}
                    onSelect={(date) => setCurrentDate(date)}
                    onClose={() => setShowCalendar(false)}
                />
            )}
        </div>
    );
}
