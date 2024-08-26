import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Sep 22', mentions: 0 },
  { name: 'Oct 22', mentions: 500 },
  { name: 'Nov 22', mentions: 1000 },
  { name: 'Dec 22', mentions: 800 },
  { name: 'Jan 23', mentions: 600 },
  { name: 'Feb 23', mentions: 700 },
  { name: 'Mar 23', mentions: 900 },
  { name: 'Apr 23', mentions: 1200 },
  { name: 'May 23', mentions: 1500 },
  { name: 'Jun 23', mentions: 2000 },
  { name: 'Jul 23', mentions: 2500 },
  { name: 'Aug 23', mentions: 3200 },
];

const ReactChart = () => {
  return (
    <div className="bg-violet-500 p-4 rounded-lg shadow-lg mx-auto w-full ">
    <div className='flex justify-between items-center'>
      <h2 className="text-white text-xl mb-4">Mentions</h2>
      <div className="text-white mb-2 flex justify-end rounded-md p-2 border border-gray-300 items-center">
        <span className="mr-2">📅</span>
        <span>Sep 2022 - Aug 2023</span>
      </div>
    </div>
    <ResponsiveContainer width={450} height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3" vertical={false} stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis dataKey="name" stroke="#ffffff" axisLine={false} tickLine={false}  />
        <YAxis stroke="#ffffff" axisLine={false} tickLine={false} />
        <Line type="monotone" dataKey="mentions" stroke="#000000" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
  
  );
};

export default ReactChart;
