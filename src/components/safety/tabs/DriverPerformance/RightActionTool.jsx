import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleDown,
    faAngleDown,
    faChevronDown,
    faEllipsisH,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import SelectedDropdown from "../../../Common/SelectedDrop";

export default function Toolbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selected, setSelected] = useState("5 mi Min Distance");
    const [showExportModal, setShowExportModal] = useState(false);
    const [showDotsMenu, setShowDotsMenu] = useState(false);

    const options = ["No Minimum Distance", "5 mi Min Distance", "10 mi Min Distance", "15 mi Min Distance", "20 mi Min Distance"];

    return (
        <div className="w-full">
            {/* Toolbar */}
            <div className="flex  justify-between items-center">

                {/* LEFT: Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex items-center gap-3  rounded-lg px-4 py-2"
                    >
                        <span className="text-sm">{selected}</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </button>

                    {showDropdown && (
                        <div className="absolute mt-2 w-[223px] bg-white  rounded-[20px] shadow-lg p-3 z-20">
                            {options.map((opt) => (
                                <label
                                    key={opt}
                                    className="flex items-center gap-3 text-sm font-[500] cursor-pointer py-1"
                                >
                                    {/* Hidden Native Radio */}
                                    <input
                                        type="radio"
                                        name="range"
                                        checked={selected === opt}
                                        onChange={() => {
                                            setSelected(opt);
                                            setShowDropdown(false);
                                        }}
                                        className="hidden peer"
                                    />

                                    {/* Custom Radio */}
                                    <span
                                        className="
      w-[20px] h-[20px] rounded-full
      border-2 border-[#8297F2]
      flex items-center justify-center
      peer-checked:border-transparent
      peer-checked:bg-gradient-to-r
      peer-checked:from-[#D1A2D8]
      peer-checked:to-[#8297F2]
    "
                                    >
                                        <span className="w-[8px] h-[8px] bg-white rounded-full"></span>
                                    </span>

                                    {/* Label Text */}
                                    {opt}
                                </label>

                            ))}
                        </div>
                    )}
                </div>

                <div className="div flex">
                    {/* RIGHT: Buttons */}
                    <div className="flex items-center gap-3 relative">

                        {/* Export Button */}
                        <button
                            onClick={() => setShowExportModal(true)}
                            className="gradient-btn text-[#fff] px-5 py-2 rounded-lg text-sm bg-gradient-to-r from-[#8297F2] to-[#D1A2D8]"
                        >
                            Export
                        </button>

                        {/* Three Dots Button */}
                        <button
                            onClick={() => setShowDotsMenu(!showDotsMenu)}
                            className="dot-btn"
                        >
                            <FontAwesomeIcon icon={faEllipsisH} />
                        </button>

                        {/* Three Dots Popup */}
                        {showDotsMenu && (
                            <div className="absolute right-0 top-12 w-40 bg-white border rounded-lg shadow-lg p-2 z-30">
                                <button className="block w-full text-left text-sm py-1 hover:text-indigo-600">
                                    Action 1
                                </button>
                                <button className="block w-full text-left text-sm py-1 hover:text-indigo-600">
                                    Action 2
                                </button>
                            </div>
                        )}
                    </div>
                    {/* FULL PAGE EXPORT MODAL */}
                    {showExportModal && (
                        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
                            <div className="bg-white w-[90%] max-w-xl rounded-xl  relative">
                                <div className="border-b border-[#00000024] py-4 px-4">
                                    <h2 className="text-[20px] font-semibold ">
                                        Export
                                    </h2>

                                    <p className="text-[17px] text-gray-600 ">
                                        Specify options for exporting your report
                                    </p>

                                </div>
                                <div className="p-4 ">
                                    <h2>Report type</h2>
                                    <SelectedDropdown options={["Event Resolution Report", "Option 2", "Option 3", "Option 4", "Option 5"]}
                                        defaultValue="Event Resolution Report"
                                        onChange={(value) => console.log("Selected:", value)} />
                                    <h2 className="py-2">Export data</h2>
                                    <div className="div flex items-start  gap-2">
                                        <input type="radio" name="" id="" />
                                       



                                       
                                        <div className="div">
                                            <h2 className="text-[17px] font-medium">By Coach</h2>
                                            <p className="text-[14px]">Show a row for every coach</p>
                                        </div>
                                    </div>
                                </div>



                                <div className="flex gap-3">
                                    <button className="gradient-btn px-4 py-2 rounded-lg text-black text-sm">
                                        Export PDF
                                    </button>
                                    <button className="gradient-btn px-4 py-2 rounded-lg text-black text-sm">
                                        Export CSV
                                    </button>

                                </div>
                                <button
                                    onClick={() => setShowExportModal(false)}
                                    className=" top-4 right-4 text-gray-500"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
