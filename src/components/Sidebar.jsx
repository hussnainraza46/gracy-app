// components/Sidebar.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SidebarDrop from './SidebarDrop'



const links = [
    { to: 'dispatch', label: 'Dispatch', icon: '/icons/sidebar-icon/Traced.png' },
    { to: 'safety', label: 'Safety', icon: '/icons/sidebar-icon/safety.png' },
    { to: '/map', label: 'Map', icon: '/icons/sidebar-icon/map.png' },
    { to: '/team', label: 'Team', icon: '/icons/sidebar-icon/team.png' },
    { to: '/drivers', label: 'Drivers', icon: '/icons/sidebar-icon/Driver.png' },
    { to: '/payroll', label: 'Payroll', icon: '/icons/sidebar-icon/payroll.png' },
    { to: '/fleet', label: 'Fleet', icon: '/icons/sidebar-icon/fleet.png' },
    { to: '/fleet-management', label: 'Fleet Management', icon: '/icons/sidebar-icon/fleet-meet.png' },
    { to: '/card', label: 'Card', icon: '/icons/sidebar-icon/card.png' },
    { to: '/passenger', label: 'Passenger', icon: '/icons/sidebar-icon/passenger.png' },
    { to: '/trips', label: 'Trips', icon: '/icons/sidebar-icon/tips.png' },
    { to: '/payers', label: 'Payers', icon: '/icons/sidebar-icon/payer.png' },
    { to: '/documents', label: 'Documents', icon: '/icons/sidebar-icon/docoment.png' },
    { to: '/training', label: 'Training', icon: '/icons/sidebar-icon/training.png' },
    { to: '/pricing', label: 'Pricing', icon: '/icons/sidebar-icon/pricing.png' }
]


export default function Sidebar() {
    return (
        <aside className="w-64 flex flex-col  justify-between h-full bg-[#F6F7FB] p-4 flex flex-col">

            <nav className="space-y-2">
                {links.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 w-full px-4 py-3 text-[15px] font-regular rounded-[10px]
    transition-all duration-200 ` +
                            (isActive ? 'text-white bg-gradient-to-r from-[#8297F2] to-[#D1A2D8]' : 'text-black hover:bg-gray-200')
                        }
                        end={item.to === '/'}
                    >
                        <img src={item.icon}  alt={item.label} className="w-[24px] h-[24px]" />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
           <SidebarDrop />
        </aside>
    )
}