import React from 'react';
import SearchIcon from '../../../Assets/SearchIcon.png';
import Bellicon from '../../../Assets/bell.png';
import messageIcon from '../../../Assets/message-outline.png';
import trophyIcon from '../../../Assets/trophy.png';


const NavigationBar = () => {
  return (

    <div className="fixed z-10 top-0 left-[311px] w-[calc(100%-315px)] bg-white h-24 flex items-center justify-between bg-background  px-4">
  
    <div className="relative flex items-center  w-8/12"> 
      <img src={SearchIcon} alt="magnifier" className="absolute left-10  top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search"
        className="w-full h-11 bg-[#F5F5F5]  pl-20 py-1 rounded bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
 
  <div className="flex items-center  w-44 h-8 pr-4 justify-between space-x-2"> 
    {/* Add onclick for adding functions */}
    <img src={messageIcon} alt="messages" className="w-6 h-6" />
    <img src={trophyIcon} alt="bell" className="w-8 h-8" />
    <img src={Bellicon} alt="notification" className="w-8 h-8" />
  </div>
</div>

  );
};

export default NavigationBar;