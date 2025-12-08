// DashboardLayout.js
import React from 'react';
import Navbar from '../../dashboard-comp/navbar';
import Sidebar from '../../dashboard-comp/Sidebar';
import { Outlet } from 'react-router-dom';  // This renders the dynamic content

export default function DashboardLayout() {
  return (
    <div className="h-[100vh] bg-[#F6F7FB] flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          {/* This will render the dynamic content like Dispatch, Safety, etc. */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}



