import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
  
 
const RoiComponent = () => {
  const months = [
    'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'
  ];


  const data = [
    { name: "Feb", amt: 400 },
    { name: "Mar", amt: 900 },
    { name: "Apr", amt: 1400 },
    { name: "May", amt: 2400 },
    { name: "Jun", amt: 800 },
    { name: "Jul", amt: 1200 },
    { name: "Aug", amt: 700 },
    { name: "Sep", amt: 400 },
    { name: "Oct", amt: 1100 },
    { name: "Nov", amt: 1100 },
    { name: "Dec", amt: 1600 },
    { name: "Jan", amt: 2200 }
  ].sort((a, b) => months.indexOf(a.name) - months.indexOf(b.name));
      

  return (
  
<div className='max-h-[328px] bg-white  mt-6 rounded-xl h-96 '>
<div class="bg-card p-2 jusitfy-between rounded-lg shadow-md">
  <div class="flex justify-between items-center mb-10">
    <h2 class="text-lg font-bold pl-4 text-card-foreground">ROI Report</h2>
    <div class="flex mr-8">
      <select class="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-border">
        <option>Weeks</option>
        <option>Months</option>
      </select>
      <button className="bg-primary text-primary-foreground p-2 rounded-lg border border-border hover:bg-primary/80">Export PDF</button>
    </div>
  </div>
  <div style={{ width: "100%", height: 229 , top:"78px" }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 13,
            bottom: 0
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Area type="monotone" dataKey="amt" stroke="#8884d8" fill="#4F46E5" opacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
</div>
</div>



  )
}

export default RoiComponent;