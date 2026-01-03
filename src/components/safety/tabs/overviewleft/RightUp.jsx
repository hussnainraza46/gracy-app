import React from 'react';

export default function RightUp() {
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
      <button 
        className="text-white font-medium py-3 px-6 rounded-xl shadow-lg transition duration-150 ease-in-out"
        // Applying the gradient color visible in the image
        style={{ backgroundImage: 'linear-gradient(to right, #8297F2, #D1A2D8)' }}
      >
        Export
      </button>
      
    </div>
  );
}