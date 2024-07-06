import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Rectangle,
  } from "recharts";

const BarGrapghComponent = () => {

    const data = [
        {name: "Mon",amt: 300},
        {name: "Tue",amt: 410},
        {name: "Wed",amt: 690},
        {name: "Thu",amt: 500},
        {name: "Fri",amt: 181},
        {name: "Sat",amt: 200},
        {name: "Sun",amt: 210},
      ];


      
    return (
    <div className='min-h-[296px] bg-white rounded-lg mt-1'>
    <div class="bg-card p-2  shadow-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold pl-4 text-card-foreground">Performance Measure</h2>
        <div class="flex mr-8">
          <select class="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-border">
            <option>Weeks</option>
            <option>Months</option>
          </select>
          <button class="bg-primary text-primary-foreground p-2 rounded-lg border border-border hover:bg-primary/80">Export PDF</button>
        </div>
      </div>
     <div className='flex flex-row justify-between'>
     <div >
      
        <BarChart
          width={650}
          height={237}
          data={data}
    
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis  />
          <Tooltip  cursor={null}/>
          {/* <Legend /> */}
          <Bar dataKey="amt" fill='#384EDD' barSize={20} activeBar={{  stroke: '#8884d8', strokeWidth: 2}}  />
        </BarChart> 
  
        </div>
        <div class="mt-6 mr-6 text-left  h-48 md:mt-0 md:ml-6 flex-col items-end justify-center">
    <div class="text-l font-semibold text-sm text-red-500  mb-1" >Decrease</div>
    <div class="text-l font-semibold text-xl mb-1 text-red-500" >20% </div>
    <div class="text-muted-foreground text-sm text-gray-500 mb-1">Current week</div>
    <div class="text-foreground text-xl font-bold mb-1" id="profitAmount">$200,000</div>
    <div class="text-muted-foreground text-sm text-gray-500 mb-1">Previous week</div>
    <div class="text-foreground text-xl font-bold">$200,000</div>
  </div>

     </div>

    </div>
    
    </div>
  )
}

export default BarGrapghComponent