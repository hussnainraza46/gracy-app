import React, { useState } from "react";


export default function OverLeft() {
  // state to manage the open/closed status of the sidebar
  const [isOpen, setIsOpen] = useState(true);

  // function to toggle the sidebar's open/closed status
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Conditional width based on isOpen state. 
    // Uses transition for a smooth animation effect.
    <div 
      className={`bg-white shadow-lg  p-[15px] flex flex-col rounded-[10px] relative transition-all duration-300 overflow-hidden ${
        isOpen ? "w-[25%]" : "w-[60px]"
      }`}
    >
      {/* --- Top Section: Collapse Button --- */}
      <button 
        onClick={toggleSidebar}
        className="flex w-full justify-end absolute top-[15px] right-[15px] z-10"
      >
        {/* Using your original image tag. Rotated based on the sidebar's state */}
        <img 
          className="border p-2 border-gray-300 rounded-lg bg-white transition-transform duration-300 w-9 h-9" 
          src="/icons/arrow-up.png" 
          alt="Toggle Sidebar" 
          // If the sidebar is Open, the arrow should point left (rotated 90 degrees or -90 degrees from 'up').
          // If the sidebar is Closed, the arrow should point up/right (rotated 0 degrees).
          // Based on the image's design (where the button is on the right and the sidebar opens to the left), 
          // a 90-degree rotation when open typically represents 'closing' it.
          style={{ transform: isOpen ? 'rotate(-0deg)' : 'rotate(180deg)' }}
        />
      </button>

      {/* --- Content Section: Only visible when the sidebar is open --- */}
      {isOpen && (
        <div className="flex flex-col h-full pt-[40px] ">
          
          {/* Tags Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-{15px} font-semibold">Tags</h2>
            <span className="text-sm text-gray-500">0 tags hidden</span>
          </div>

          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative">
              {/* Search Icon (using SVG fallback) */}
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input 
                type="text" 
                placeholder="Search tags" 
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500" 
              />
            </div>
          </div>

          {/* Drivers/Vehicles Tabs */}
          <div className="flex mb-4 p-1 bg-gray-100 rounded-xl">
            <button className="flex-1 py-2 px-4 text-center text-sm font-medium text-blue-800 bg-white shadow-sm rounded-lg">
              Drivers
            </button>
            <button className="flex-1 py-2 px-4 text-center text-sm font-medium text-gray-600">
              Vehicles
            </button>
          </div>

          {/* Tag List Section */}
          <div className="flex flex-col space-y-2 overflow-y-auto">
            
            {/* All Drivers Section - Active State */}
            <div className="bg-blue-50/70 text-[#60A5FA] font-medium rounded-md border-l-3 p-3 flex justify-between items-center cursor-pointer">
              <span className="text-[#111111] font-semibold">All Drivers</span>
              <div className="flex items-center space-x-2">
                {/* Person Icon (using SVG fallback) */}
                <img src="/icons/drivers-all.png" alt="" />
                <span className="text-lg text-[#111111] font-bold">1</span>
                <span className="text-lg text-[#111111] font-bold">100</span>
              </div>
            </div>

            {/* SCK Drivers Section - Inactive State with Red Dot */}
            <div className="border-t border-b border-gray-200 pt-2">
              <div className="p-3 flex justify-between items-center cursor-pointer">
                <span className="text-gray-800">SCK Drivers</span>
                <div className="flex items-center space-x-2">
                 
                  {/* Person Icon (using SVG fallback) */}
                  <img src="/icons/drivers-all.png" alt="" />
                  <span className="text-gray-600 text-lg font-bold">1</span>
                  <span className="text-gray-600 text-lg font-bold">100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}