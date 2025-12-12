import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className=" h-full w-full bg-[#F6F7FB]">
            <Topbar />
            
            <div className="flex  flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto ">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
