import React from 'react';

export default function DateMonth() {

    const getTodayInfo = () => {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        const now = new Date();

        return {
            dayName: days[now.getDay()],
            date: now.getDate(),
            monthName: months[now.getMonth()],
        };
    };

    const { dayName, date, monthName } = getTodayInfo();

    return (
        <div className='p-[15px]'>
            <h2 className='text-[15px] font-semibold'>{dayName}</h2>
            <p className='text-[11px] text-gray-800 font-refular'> {monthName} {date}</p>
        </div>
    );
}
