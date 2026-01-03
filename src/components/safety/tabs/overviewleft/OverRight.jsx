import React from 'react'
import RightUp from './RightUp'
import SafetyScoreComponent from './SafetyScoreCom';
import RiskFactorsTable from './RiskFactorTable';

const stats = [
  { label: "Coaching behaviours  past due", value: 0 },
  { label: "Events to review", value: 0 },
  { label: "Events with unassigned drivers", value: 0 },
  { label: "Session due in the next 3 days", value: 0 },
];

export default function OverRight() {
  return (
    <div className='w-full'>
      <div className="id bg-FFFFFF">
        <RightUp />
        <div className="w-full bg-[#fff] p-4 font-sans">
          {/* Container with Blue Top Border */}
          <div className="bg-[#F6F7FB] rounded-md  shadow-sm p-6">

            {/* Header Section */}
            <div className="flex items-baseline gap-3 mb-6">
              <h2 className="text-xl font-bold text-gray-700">Your Safety Actions</h2>
              <span className="text-sm text-gray-400 font-medium">
                Last 7 days (Nov 21 - NOV 28)
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#fcfcfc] border border-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <span className="text-[12px] text-gray-500 leading-tight pr-4">
                    {stat.label}
                  </span>
                  <span className="text-3xl font-light text-gray-600">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SafetyScoreComponent/>
        <RiskFactorsTable/>
      </div>
    </div>
  )
}
