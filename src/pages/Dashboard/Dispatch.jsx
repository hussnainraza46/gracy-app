import React from 'react'
import EngagePopup from '../../DispatchComponent/EngagePopup'
import DisCalenderTable from '../../DispatchComponent/DisCalenderTable'

export default function Dispatch() {
  return (
    <div className='h-full w-full gap-[20px] flex rounded-tl-[20px] bg-[#ffffff] p-[20px]'>
      <EngagePopup/>
      <DisCalenderTable/>
    </div>
  )
}
