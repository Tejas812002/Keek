import React from 'react'
import SidebarContent from '../Components/NavigationBar/SideBar/SidebarContent'
import NavigationBar from '../Components/NavigationBar/Navbar/NavigationBar'
import Dashboard from '../Components/Dashboard/Dashboard'

const AdminPanel = () => {
  return (
    <div className="flex bg-[#F5F5F5] h-[950px] flex-col">
      <div >
       <SidebarContent/>
      
      </div>
      <div className="flex-row ">
        <NavigationBar/>
        <Dashboard />
      </div>
    </div>
  )
}

export default AdminPanel