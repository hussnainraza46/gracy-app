import React, { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import FeedbackButton from "./FeedbackButton";

export default function SidebarDrop({ name = "Lathrop Transit" }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const firstLetter = name.charAt(0).toUpperCase();

    return (
        <div className="relative " ref={dropdownRef}>
            {/* Profile Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center gap-2 w-full bg-white px-3 py-2 rounded hover:bg-gray-200 transition"
            >
                <span className="font-medium">{name}</span>
                <div className="w-8 h-8 flex items-center justify-center text-md bg-black text-white rounded-full font-bold">
                    {firstLetter}
                </div>

            </button>

            <FeedbackButton/>
            {/* Dropdown Menu */}
            {open && (
                <div className="absolute w-[250px] bottom-full mb-2 left-[20px]  bg-white  rounded-[10px] shadow-lg overflow-hidden z-50">
                    <a
                        href="#profile"
                        className="block px-4 py-[8px] hover:bg-gray-100 transition"
                    >
                        <h1 className="text-[14px] font-medium">User Name</h1>
                        <p className="text-[12px] text-gray-500">useremail@gmail.com</p>
                    </a>
                    <hr className="text-gray-200" />

                    <a
                        href="#logout"
                        className="block flex gap-2 py-2 px-4 py-[8px] hover:bg-gray-100 transition"
                    >
                        <img src="/icons/profile-icon.png" alt="" />
                        <h1 className="text-[12px]">Profile</h1>
                    </a>
                    <a
                        href="#logout"
                        className="block flex gap-2 px-4 py-[8px] hover:bg-gray-100 transition"
                    >
                        <img src="/icons/Component-17.png" alt="" />
                        <h1 className="text-[12px]">What's New</h1>
                    </a>
                    <hr className="text-gray-200" />
                    <a className="block px-4 flex items-center gap-2 py-[8px] text-sm text-gray-800 cursor-pointer hover:bg-gray-100 transition">
                        <img src="/icons/Component18.png" alt="" /> Billings
                    </a>
                    <a className="block  px-4 flex items-center gap-2 py-[8px] text-sm text-gray-800 cursor-pointer hover:bg-gray-100 transition ">
                        <img src="/icons/19.png" alt="" />  Webstore
                    </a>

                    <a className="block  px-4 flex items-center gap-2 py-[8px] text-sm text-gray-800 cursor-pointer hover:bg-gray-100 transition">
                        <img src="/icons/21.png" alt="" />  Exchange cable
                    </a>

                    <a className="block  px-4 flex items-center gap-2 py-[8px] text-sm text-gray-800 cursor-pointer hover:bg-gray-100 transition">
                        <img src="/icons/22.png" alt="" />  Referrals
                    </a>



                    <hr className="text-gray-300" />


                    <a className="block  px-4 flex items-center gap-2 py-[8px] text-sm text-gray-800 cursor-pointer hover:bg-gray-100 transition">
                        <img src="/icons/23.png" alt="" /> Activate Devices
                    </a>


                    <a className="block  px-4 flex items-center gap-2 py-[8px] text-sm text-gray-800 cursor-pointer hover:bg-gray-100 transition">
                        <img src="/icons/24.png" alt="" /> Organization settings
                    </a>


                    <a className="block  px-4 flex items-center gap-2 py-[8px] text-sm text-gray-800 cursor-pointer hover:bg-gray-100 transition">
                        <img src="/icons/25.png" alt="" />  Sign out
                    </a>

                    <hr className="text-gray-300" />
                    <a className="block px-4  text-sm py-[8px] text-gray-800 cursor-pointer ">
                        View My Organizations
                    </a>
                    <hr className="text-gray-300" />
                    <a className="block px-4 text-sm py-[8px] text-gray-800 cursor-pointer ">
                        Terms of Service • Privacy
                    </a>
                </div>
            )}
        </div>
    );
}
