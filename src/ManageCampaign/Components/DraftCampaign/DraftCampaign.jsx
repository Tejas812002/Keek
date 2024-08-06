import React, { useContext, useState } from 'react'
import { Mycontext } from '../../../utils/Context';
import { Link, useLocation } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { LuFilter } from "react-icons/lu";
import CampaignFilterOptions from "../Filter/CampaignFilterOptions";

const DraftCampaign = () => {
  
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (

    <div
    class={` flex relative ${
      !expanded
        ? "left-[100px] w-[calc(100%-110px)]"
        : "left-[320px] w-[calc(100%-320px)]"
    }  overflow-y-auto  bg-white space-y-4 p-4 `}
  >
    <div className="bg-white h-[897px] w-full">
      <div class="flex w-full justify-between items-center p-4 bg-white border-border">
        <div>
          <h1 class="text-2xl font-bold text-foreground">Manage Campaign</h1>
          <p class="text-muted-foreground">
            Easily create new campaign, keep track of live & past campaigns.
          </p>
        </div>
        <Link to={""}>
          <button class="bg-[#06F] text-white text-primary-foreground flex items-center hover:bg-primary/80 px-4 py-2 rounded-lg ">
            <span class="mr-2 text-3xl">+</span> Add Campaign
          </button>
        </Link>

      </div>
        <div class="flex border-b border-border">
        <div className="flex space-x-4">
    <Link to="/LiveCampaign">
      <button
        className={`py-2 px-4 text-primary  ${
          location.pathname === '/LiveCampaign'
            ? ' font-semibold border-b-2 border-blue-500'
            : ''
        }`}
      >
        Live campaigns
      </button>
    </Link>
    <Link to="/PastCampaign">
      <button
        className={`py-2 px-4 ${
          location.pathname === '/PastCampaign'
            ? 'text-primary border-b-2 border-blue-500 font-semibold'
            : 'text-muted hover:text-muted-foreground'
        }`}
      >
        Past campaigns
      </button>
    </Link>
    <Link to="/DraftCampaign">
      <button
        className={`py-2 px-4 ${
          location.pathname === '/DraftCampaign'
            ? 'text-primary border-b-2 border-blue-500 font-semibold'
            : 'text-muted hover:text-muted-foreground'
        }`}
      >
        Drafts
      </button>
    </Link>
  </div>
<div class="relative">
  <span class="absolute top-0 left-0 transform translate-x-1/2 -translate-y-1/2 bg-destructive rounded-full w-2.5 h-2.5"></span>
</div>
</div>

      {/* searchbar */}
      <div className="mr-4 ml-4 mt-[28px] ">
      <div
        className={` bg-[#F5F5F5] h-[60px] flex items-center rounded-lg justify-between bg-background `}
      >
        <div className="relative flex items-center h-[35px] ml-[18px] w-8/12">

        <CiSearch className="absolute left-4 text-gray-500 top-1/2 transform -translate-y-1/2 size-4" />
          <input
            type="text"
            placeholder="Search Campaigns"
            className="w-full bg-white py-1 px-10 rounded bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="flex items-center mr-[18px] h-[40px] text-gray-500 cursor-pointer justify-between space-x-2">
   
        <button 
            onClick={toggleModal} 
            className="flex items-center text-sm space-x-2 bg-white text-gray-500 px-4 py-2 rounded-md"
          >
            <LuFilter  className="mr-2 text-base text-gray-500" /> Filter
          </button>
          
   
          {isModalVisible && (
            <div className="absolute top-52 right-10 mt-4 z-50">
              <CampaignFilterOptions 
                isModalVisible={isModalVisible} 
                setIsModalVisible={setIsModalVisible} 
              />
            </div>
          )}
        </div>
      </div>
      </div>


    </div>
  </div>
    
  )
}

export default DraftCampaign