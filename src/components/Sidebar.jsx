// components/Sidebar.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShieldAlt,
    faMap,
    faUsers,
    faUserTie,
    faMoneyCheckAlt,
    faTruck,

    faSitemap,
    faCreditCard,
    faUser,
    faRoad,
    faFile,
    faBook,
    faTags,
    faTruckFast
} from '@fortawesome/free-solid-svg-icons'


const links = [
    { to: 'dispatch', label: 'Dispatch', icon: faTruckFast },
    { to: 'safety', label: 'Safety', icon: faShieldAlt },
    { to: '/map', label: 'Map', icon: faMap },
    { to: '/team', label: 'Team', icon: faUsers },
    { to: '/drivers', label: 'Drivers', icon: faUserTie },
    { to: '/payroll', label: 'Payroll', icon: faMoneyCheckAlt },
    { to: '/fleet', label: 'Fleet', icon: faTruck },
    { to: '/fleet-management', label: 'Fleet Management', icon: faSitemap },
    { to: '/card', label: 'Card', icon: faCreditCard },
    { to: '/passenger', label: 'Passenger', icon: faUser },
    { to: '/trips', label: 'Trips', icon: faRoad },
    { to: '/payers', label: 'Payers', icon: faUsers },
    { to: '/documents', label: 'Documents', icon: faFile },
    { to: '/training', label: 'Training', icon: faBook },
    { to: '/pricing', label: 'Pricing', icon: faTags }
]


export default function Sidebar() {
    return (
        <aside className="w-64  h-full bg-[#F6F7FB] p-4 flex flex-col">

            <nav className="space-y-2">
                {links.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 w-full px-4 py-3 text-[15px] font-regular rounded-[10px]
    transition-all duration-200 ` +
                            (isActive ? 'text-white bg-gradient-to-r from-[#D1A2D8] to-[#8297F2]' : 'text-black hover:bg-gray-200')
                        }
                        end={item.to === '/'}
                    >
                        <FontAwesomeIcon icon={item.icon} className="w-[24px] h-[24px]" />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}