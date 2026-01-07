import React, { useState } from "react";

import SelectedDropdown from "../../../Common/SelectedDrop";

export default function RightUp() {
   const [showExportModal, setShowExportModal] = useState(false);
   const [showDropdown, setShowDropdown] = useState(false);

  return (
    // Main container for the upper-right section
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-xs w-full">
      
      {/* --- 1. Search Bar (Search Unassigned trips) --- */}
      <div className="relative w-2/5 max-w-md bg-[#F6F7FB]">
        <svg 
          className="w-5 h-5 text-[#C1C5CE] absolute left-4 top-1/2 transform -translate-y-1/2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <input 
          type="text" 
          placeholder="Search Unassigned trips" 
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-700 placeholder-gray-400 bg-white shadow-inner"
        />
      </div>

      {/* --- 2. Export Button --- */}
      <button   onClick={() => setShowExportModal(true)}
        className="text-white font-medium py-3 px-6 rounded-xl shadow-lg transition duration-150 ease-in-out"
        // Applying the gradient color visible in the image
        style={{ backgroundImage: 'linear-gradient(to right, #8297F2, #D1A2D8)' }}
      >
        Export
      </button>


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

  );
}