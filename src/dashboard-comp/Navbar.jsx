import React from 'react'
import Logo from '../components/logo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AddTripBtn from './AddTripBtn';
import ChatBtn from './ChatBtn';
import ProfileDrop from './ProfileDrop';


export default function Navbar() {
  return (
    <div className='py-4 px-4 flex justify-between bg-[#F6F7FB]' >
      <Logo/>
      <div className="input border bg-white flex w-md items-center rounded-lg border-gray-300 gap-2 px-2 py-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input  className='border-none w-xs focus-visible:outline-none text-gray-500' type="search"  placeholder='Search Unassigned trips'/>
      </div>
      <div className="div flex gap-4 items-center">
        <AddTripBtn/>
        <ChatBtn/>
        <ProfileDrop/>
      </div>
        
    </div>
  )
}
