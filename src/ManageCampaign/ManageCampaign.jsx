import React from 'react'
import SidebarContent from '../ManageCampaign/Components/NavigationBar/SideBar/SidebarContent'
import Dashboard from '../ManageCampaign/Components/Dashboard/Dashboard'

const ManageCampaign = () => {
  return (
    <div className="flex max-h-full bg-[#F5F5F5] font-body flex-col ">
      <div >
       <SidebarContent/>
      
      </div>
      <div className="flex-row ">
         <Dashboard  />
      
      </div>
    </div>
  )
}

export default ManageCampaign