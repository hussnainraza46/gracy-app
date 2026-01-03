import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const RiskFactorsTable = () => {
  const [openRows, setOpenRows] = useState({});

  const toggleRow = (id) => {
    setOpenRows(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const riskData = [
    { id: 'crash', factor: 'Crash', count: '0 total events -', rate: '0 events / 1,000 mi -', impact: '0 pts' },
    { id: 'harsh', factor: 'Harsh Driving', count: '0 total events -', rate: '0 events / 1,000 mi -', impact: '0 pts' },
    { id: 'policy', factor: 'Policy Violations', count: '0 total events -', rate: 'Mixed Rates', impact: '0 pts' },
    { id: 'collision', factor: 'Collision Risk', count: '0 total events -', rate: 'Mixed Rates', impact: '0 pts' },
    { id: 'distracted', factor: 'Distracted Driving', count: '0 total events -', rate: '0 events / 1,000 mi -', impact: '0 pts' },
    { id: 'traffic', factor: 'Traffic Signs & Signals', count: '0 total events -', rate: '0 events / 1,000 mi -', impact: '0 pts' },
  ];

  return (
    <div className="w-full bg-white mt-6 rounded-sm pb-8 shadow-sm">
      {/* Header Section */}
      <div className="p-4 border-b border-gray-100 flex items-baseline gap-4">
        <h2 className="text-lg font-bold text-gray-700">Risk Factors</h2>
        <span className="text-sm text-gray-400">Oct 29 – Nov 28</span>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
            <th className="py-3 px-6 font-medium w-1/4">Risk Factor</th>
            <th className="py-3 px-4 font-medium">Count</th>
            <th className="py-3 px-4 font-medium">Rate or %</th>
            <th className="py-3 px-4 font-medium">Score Impact</th>
            <th className="py-3 px-6 font-medium text-right">Score Impact</th>
          </tr>
        </thead>
        <tbody>
          {riskData.map((row) => (
            <React.Fragment key={row.id}>
              {/* Main Row */}
              <tr 
                className="group hover:bg-gray-50 cursor-pointer border-b border-gray-50 transition-colors"
                onClick={() => toggleRow(row.id)}
              >
                <td className="py-4 px-6 flex items-center gap-2 text-gray-700 font-semibold">
                  {openRows[row.id] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  {row.factor}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">{row.count}</td>
                <td className="py-4 px-4 text-sm text-gray-500">{row.rate}</td>
                <td className="py-4 px-4 text-sm text-gray-500">{row.impact}</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-sm text-gray-600 underline hover:text-blue-600 transition-colors">
                    View Details
                  </button>
                </td>
              </tr>
              
              {/* Accordion/Sub-row content */}
              {openRows[row.id] && (
                <tr className="bg-gray-50/50">
                  <td colSpan="5" className="px-12 py-4 text-sm text-gray-500 border-b border-gray-100 italic">
                    Additional details and historical breakdown for {row.factor} would appear here.
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiskFactorsTable;