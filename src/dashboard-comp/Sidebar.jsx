import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faMap,
  faUsers,
  faUserTie,
  faMoneyCheckAlt,
  faTruck,
  faSitemap,
  faCreditCard,
  faPerson,
  faRoute,
  faHandHoldingUsd,
  faFileAlt,
  faChalkboardTeacher,
  faDollarSign,
  faTruckFast
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [active, setActive] = useState("Dispatch");

  const menuItems = [
    { name: "Dispatch", icon: faTruckFast, path: "/dispatch" },
    { name: "Safety", icon: faShieldAlt },
    { name: "Map", icon: faMap },
    { name: "Team", icon: faUsers },
    { name: "Drivers", icon: faUserTie },
    { name: "Payroll", icon: faMoneyCheckAlt },
    { name: "Fleet", icon: faTruck },
    { name: "Fleet management", icon: faSitemap },
    { name: "Card", icon: faCreditCard },
    { name: "Passenger", icon: faPerson },
    { name: "Trips", icon: faRoute },
    { name: "Payers", icon: faHandHoldingUsd },
    { name: "Documents", icon: faFileAlt },
    { name: "Training", icon: faChalkboardTeacher },
    { name: "Pricing", icon: faDollarSign },
  ];

  return (
    <div className="w-64  bg-[#F7F8FC]  border-gray-200 p-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to="/dashboard/dispatch"  // Correct path
              onClick={() => setActive(item.name)}
              className={`
    flex items-center gap-3 w-full px-4 py-3 text-[15px] font-regular rounded-[10px]
    transition-all duration-200
    ${active === item.name
                  ? "text-white bg-gradient-to-r from-[#D1A2D8] to-[#8297F2]"
                  : "text-black hover:bg-gray-200"
                }
  `}
            >
              <FontAwesomeIcon icon={item.icon} className="w-[24px] h-[24px]" />
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

