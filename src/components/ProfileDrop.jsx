import React from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faStar, faUser } from "@fortawesome/free-solid-svg-icons";

export default function ProfileDrop() {
    return (
        <Menu as="div" className="relative inline-block">
            <MenuButton className="flex items-center rounded bg-white justify-between w-xs gap-3 bg-white px-3 py-2 rounded-lg focus-visible:outline-none inset-ring-1 inset-ring-white/5">
                <div className="div flex items-center gap-3 ">
                    {/* Profile Image */}
                    <img
                        src="/icons/profile.png"          // <- apna image route laga lena
                        alt="Profile"
                        className="w-[34px] h-[34px] rounded-full object-cover"
                    />

                    {/* Name + Title */}
                    <div className="text-left">
                        <p className="text-back text-lg font-semibold leading-tight">
                            John Doe
                        </p>
                        <p className="text-gray-400 text-xs leading-tight">
                            Title
                        </p>
                    </div>
                </div>
                {/* Chevron Icon */}
                <FontAwesomeIcon icon={faChevronDown} className="text-gray-800 ml-1 flex-end" />

            </MenuButton>

            <MenuItems
                transition
                className="absolute w-[250px] right-[20px] z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 
        rounded-md bg-white outline outline-1 -outline-offset-1 outline-white/10
        transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[closed]:transform
        data-[enter]:duration-100 data-[enter]:ease-out
        data-[leave]:duration-75 data-[leave]:ease-in"
            >
                <div className=" ">

                    <MenuItem>
                        <a href="" className="block px-4 py-2 text-md text-gray-800 gap-0 cursor-pointer hover:bg-gray-100 transition">
                            <h3 className="text-black font-medium">User Name</h3>
                            <span className="text-sm text-gray-800">useremail@gmail.com</span>
                        </a>

                    </MenuItem>
                    <hr className="text-gray-300" />
                    <MenuItem>

                        <a className="block px-4 py-[8px] text-sm text-gray-800 flex items-center gap-2 cursor-pointer  hover:bg-gray-100 transition">
                           <img src="/icons/profile-icon.png" alt="" /> Profile
                        </a>
                        
                    </MenuItem>
                    <MenuItem>

                        <a className="block px-4 py-[8px] text-sm text-gray-800 flex items-center gap-2 cursor-pointer  hover:bg-gray-100 transition">
                           <img src="/icons/Component-17.png" alt="" /> What's New
                        </a>
                        
                    </MenuItem>
                    <hr className="text-gray-300" />
                    <MenuItem>
                        <a className="block  px-4 flex items-center gap-2 py-[8px] text-sm text-gray-800 cursor-pointer hover:bg-gray-100 transition">
                          <img className="w-[18px] h-[18px]" src="/icons/23.png" alt="" />  Activate Devices
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a className="block  px-4 flex items-center gap-2 py-[8px] text-sm text-gray-800 cursor-pointer hover:bg-gray-100 transition">
                          <img src="/icons/25.png" alt="" />  Sign out
                        </a>
                    </MenuItem>
                   
                    
                </div>
                
                    
                <div className="py-1">
                    <hr className="text-gray-300" />
                    <MenuItem>
                        <a className="block px-4 py-[8px] text-sm text-gray-800 cursor-pointer ">
                           View My Organizations
                        </a>
                    </MenuItem>
                    <hr className="text-gray-300" />
                     <MenuItem>
                        <a className="block px-4 py-[8px] text-sm text-gray-800 cursor-pointer ">
                           Terms of Service • Privacy
                        </a>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
}