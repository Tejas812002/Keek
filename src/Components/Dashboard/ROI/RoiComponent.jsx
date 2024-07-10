import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const RoiComponent = () => {
  const [selectedOption, setSelectedOption] = useState('Months'); // Default option is Months

  const months = ['Jan',
    'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 
  ];

  const weekData = [
    { name: 'Mon', amt: 300 },
    { name: 'Tue', amt: 410 },
    { name: 'Wed', amt: 690 },
    { name: 'Thu', amt: 500 },
    { name: 'Fri', amt: 181 },
    { name: 'Sat', amt: 680 },
    { name: 'Sun', amt: 210 },
  ];

  const monthData = [
    { name: 'Jan', amt: 2200 },
    { name: 'Feb', amt: 400 },
    { name: 'Mar', amt: 900 },
    { name: 'Apr', amt: 1400 },
    { name: 'May', amt: 2400 },
    { name: 'Jun', amt: 800 },
    { name: 'Jul', amt: 1200 },
    { name: 'Aug', amt: 700 },
    { name: 'Sep', amt: 400 },
    { name: 'Oct', amt: 1100 },
    { name: 'Nov', amt: 1100 },
    { name: 'Dec', amt: 1600 },
  
  ].sort((a, b) => months.indexOf(a.name) - months.indexOf(b.name));

  const dataToDisplay = selectedOption === 'Weeks' ? weekData : monthData;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='bg-white mt-6 rounded-xl max-h-[328px]'>
      <div className='bg-card max-h-[328px] p-4 justify-between rounded-lg shadow-md'>
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-lg font-bold pl-4 text-card-foreground'>ROI Report</h2>
          <div className='flex mr-8 '>
            <select
              className='bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-gray-500'
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value='Weeks'>Weeks</option>
              <option value='Months'>Months</option>
            </select>
            <button className='bg-primary text-primary-foreground p-2 rounded-lg border border-gray-500 hover:bg-primary/80'>
              Export PDF
            </button>
          </div>
        </div>
        <div style={{ width: '100%', height: 229 }}>
          <ResponsiveContainer>
            <AreaChart
              data={dataToDisplay}
              margin={{
                top: 10,
                right: 20,
                left: 20,
                bottom: 0
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey='name' />
              {/* <YAxis /> */}
              <Tooltip />
              <Area
                type='monotone'
                dataKey='amt'
                stroke='#8884d8'
                fill='#4F46E5'
                opacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RoiComponent;
