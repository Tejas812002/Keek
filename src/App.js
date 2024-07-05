import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import NavigationBar from "./Components/NavigationBar/Navbar/NavigationBar";

import SideBar, {
  SidebarItem,
  SidebarContext,
} from "./Components/NavigationBar/SideBar/SideBar";
import {
  Home,
  LayoutGrid,
  UserRoundSearch,
  Crown,
  HardDrive,
  CalendarDays,
  Bookmark,
  Settings,
  Headphones,
} from "lucide-react";

function App() {
  return (
    <div className="flex bg-[#F5F5F5] flex-col">
      <div className="max-w-[340px]  ">
        <SideBar>
          <SidebarItem icon={<Home size={20} />} text="Home" />
          <SidebarItem icon={<LayoutGrid size={20} />} text="Admin Panel">
            <SidebarItem text="ROI Report" customClass="text-gray-400" />
            <SidebarItem text="Audience Insights" customClass="text-gray-400" />
            <SidebarItem
              text="Manage Influencers"
              customClass="text-gray-400"
            />
          </SidebarItem>
          <SidebarItem icon={<Bookmark size={20} />} text="Saved Lists" />
          <SidebarItem
            icon={<UserRoundSearch size={20} />}
            text="Discover Influencers"
          />
          <SidebarItem icon={<Crown size={20} />} text="Hire Influencers" />
          <SidebarItem icon={<HardDrive size={20} />} text="Influencers Base" />
          <SidebarItem icon={<CalendarDays size={20} />} text="Calendar" />

          <SidebarContext.Consumer>
            {({ expanded }) =>
              expanded ? (
                <p className="ml-0 text-gray-500 mt-4 mb-4">Account</p>
              ) : (
                <hr className="my-4 border-gray-200" />
              )
            }
          </SidebarContext.Consumer>

          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<Headphones size={20} />} text="Live Support" />
        </SideBar>
      </div>
      <div className="flex-row">
        <NavigationBar/>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
