import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function ChatBtn() {
  return (
    <div className='border rounded-xl p-2 gradient-border border-[#D1A2D8] cursor-pointer items-center'>
        <button className='items-center flex'><img src="/icons/solar_chat-line-outline.png" alt="" /></button>
    </div>
  )
}
