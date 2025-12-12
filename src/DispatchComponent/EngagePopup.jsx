import React, { useState, useRef, useEffect } from 'react';
import Button from '../components/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import TableEngage from './TableEngage';

export default function EngagePopup() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-white shadow-sm p-[15px] flex flex-col justify-between h-full rounded-[10px] w-[25%] relative">
            <div></div>
            <p className="text-[17px] text-[#000000] text-center px-4">
                There is no unassigned <br /> trips for graci to run 😉
            </p>

            {/* Button */}
            <div className="relative">
                <Button onClick={() => setShowDropdown(!showDropdown)} />

                {/* Dropdown */}
                {showDropdown && (
                    <div
                        ref={dropdownRef}
                        className="absolute w-[500px] left-0 bottom-full mb-2  bg-white border border-gray-300 shadow-lg rounded-xl z-50"
                    >
                        <div className="div  px-4 py-2">
                            <h2 className='font-medium text-[20px]  text-[#000000]'>Assignment Selection</h2>
                            <p className=' text-[#00000080]'>Select the assignment you want Run Bambi Run to use.</p>
                        </div>

                        <hr className='text-gray-300' />
                        <div className="div  px-4 py-4">
                            <div className="input border bg-white flex w-md items-center rounded-lg border-gray-300 gap-2 px-2 py-3">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <input className='border-none w-xs focus-visible:outline-none text-gray-500' type="search" placeholder='Search Assignments' />
                            </div>
                        </div>
                        <TableEngage />
                        <div className="div flex flex-col gap-4 py-8 pb-22 items-center justify-center text-center">
                            <img src="/icons/no-assignment.png" alt="" />
                            <h2 className='text-[17px] text-gray-700 '>No Assignment Found</h2>
                            <p className='text-[17px] text-[#00000080]'>Try a different search term or add more <br /> assignments.</p>
                        </div>
                        <hr className='text-gray-300' />
                        <div className="div flex gap-3 px-4 py-4">
                            <button className=' border border-[#8297F2] cursor-pointer rounded-lg py-3 px-6 text-[#D1A2D8] text-[17px]'>
                                Cancel
                            </button>
                            <button className='text-white rounded-lg w-full cursor-pointer py-3 px-6 bg-gradient-to-r from-[#8297F2] to-[#D1A2D8]'>
                                Run Bambi Run with all assignments
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
