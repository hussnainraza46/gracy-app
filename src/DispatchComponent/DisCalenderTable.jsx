import React from 'react'
import DateMonth from './DateMonth'
import DateNavigator from './DateNavigator'
import FilterButton from './FilterButton'
import StatusSummary from './StatusSummary'

export default function DisCalenderTable() {
    return (
        <div className=' w-full'>
            <div className="bg-white h-full w-full rounded-[10px] shadow-sm ">
                <div className="div gap-3 items-center justify-around flex">
                    <DateMonth />
                    <DateNavigator/>
                    <FilterButton/>
                    <StatusSummary/>
                </div>

                <hr className='text-gray-300' />
            </div>


        </div>
    )
}
