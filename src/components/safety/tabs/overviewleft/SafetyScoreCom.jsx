import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// Sample data for the graph
const data = [
  { name: 'Oct 27', score: 100 },
  { name: 'Nov 10', score: 100 },
  { name: 'Nov 28', score: 100 },
];

const SafetyScoreComponent = () => {
  return (
    <div className="w-full bg-white  rounded-lg shadow-sm  overflow-hidden">
      <div className="flex flex-col md:flex-row">
        
        {/* LEFT COLUMN: Safety Score */}
        <div className="flex-[2] p-6 border-r-2 border-gray-100">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-bold text-gray-700">Safety Score</h2>
            <span className="text-sm text-gray-400">Oct 29 – Nov 28</span>
          </div>

          {/* Score Comparison */}
          <div className="flex gap-20 mb-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">This Period</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-green-500">100</span>
                <span className="text-xs text-gray-400 flex items-center">
                  ↓ 0 pts
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Previous Period</p>
              <span className="text-5xl font-bold text-gray-500">N/A</span>
            </div>
          </div>

          {/* Line Chart */}
          <div className="h-40 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  hide={true} 
                />
                <YAxis 
                  domain={[98, 100]} 
                  ticks={[99, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#9ca3af' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#3b82f6" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-right text-xs text-gray-400 mt-1">28 Nov</div>
          </div>

          {/* Metrics Footer */}
          <div className="grid grid-cols-3 gap-4 border-t border-gray-50 pt-4">
            <div>
              <p className="text-sm text-gray-400">Distance Driven</p>
              <p className="text-lg font-medium text-gray-700">0.1 mi</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Time Driven</p>
              <p className="text-lg font-medium text-gray-700">55 Sec</p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <p className="text-sm text-gray-500">Oct 27 – Nov 28</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Behavior Insights */}
        <div className="flex-1 p-6 bg-white">
          <h2 className="text-xl font-bold text-gray-400">Behavior Insights</h2>
        </div>
      </div>
    </div>
  );
};

export default SafetyScoreComponent;