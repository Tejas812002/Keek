import React from 'react'
import CampaignComponent from './Campaigns/CampaignComponent'
import PieChartComponent from './PieChart/PieChartComponent'
import RoiComponent from './ROI/RoiComponent'
import BarGrapghComponent from './BarGrapgh/BarGrapghComponent'
import InvestmentStats from './InvestmentStats/InvestmentStats'


const Dashboard = () => {

  return (
    <div class={`flex relative top-20 left-[350px] w-[calc(100%-350px)] bg-[#F5F5F5] space-y-4 p-4 `}>
    <div class="flex flex-col justify-between mt-6 mb-2 max-w-72 ">
     <CampaignComponent/>
     <PieChartComponent/>
    </div>
  
    <div class="flex flex-col w-10/12 ml-6 mr-4 top-2/4 ">
     <BarGrapghComponent/>

  <RoiComponent/>
     <InvestmentStats/>
    </div>
  </div>
  )
}

export default Dashboard