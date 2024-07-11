import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CgBell, CgTrophy } from "react-icons/cg";
import { FiMessageSquare } from "react-icons/fi";


const NavigationBar = ({ expanded }) => {
  return (

    <div   className={`fixed z-10 top-0 ${!expanded && "left-[78px] w-[calc(100%-65px)]"} left-[311px] w-[calc(100%-311px)] bg-white h-24 flex items-center justify-between bg-background  px-4`}>
  
  <div className="relative flex items-center w-8/12">
  <div className="absolute pl-3">
    <CiSearch className='size-6' />
  </div>
  <input
    type="text"
    placeholder="Search"
    className="w-full h-11 bg-[#F5F5F5] pl-10 pr-4 py-1 rounded bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
  />
</div>

 
  <div className="flex items-center  w-44 h-8 pr-4 justify-between space-x-2"> 
    {/* Add onclick for adding functions */}
    <FiMessageSquare className='size-7'/>
    <CgTrophy className='size-9'/>
    <CgBell className='size-8'/>
  </div>
</div>

  );
};

export default NavigationBar;