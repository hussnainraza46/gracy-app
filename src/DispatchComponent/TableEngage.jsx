import React from 'react'

export default function TableEngage() {
  return (
    <div>
        <table className='w-full'>
            <th className='flex py-4 justify-around items-center text-gray-400 bg-[#F6F7FB]'>
                <tr><input className='w-4 h-4' type="checkbox" name="" id="" /></tr>
                <tr>Driver</tr>
                <tr>Vehicle</tr>
                <tr>Start</tr>
                <tr>End</tr>
            </th>
        </table>
    </div>
  )
}
