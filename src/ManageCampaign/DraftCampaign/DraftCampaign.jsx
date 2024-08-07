import React, { useContext, useState } from 'react'
import { Mycontext } from '../../utils/Context';
import { Link, useLocation } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { LuFilter } from "react-icons/lu";
import CampaignFilterOptions from "../Filter/CampaignFilterOptions";
import { FaCircleDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from 'react-icons/io';



const DraftCampaign = () => {

  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const campaigns = [
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Draft",
      platform: "Instagram +2",
      startDate: "1 July 24",
      endDate: "10 July 24"
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Draft",
      platform: "Instagram +2",
      startDate: "1 July 24",
      endDate: "10 July 24"
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Draft",
      platform: "Instagram +2",
      startDate: "1 July 24",
      endDate: "10 July 24"
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Draft",
      platform: "Instagram +2",
      startDate: "1 July 24",
      endDate: "10 July 24"
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Draft",
      platform: "Instagram +2",
      startDate: "1 July 24",
      endDate: "10 July 24"
    },
    // Add more campaigns here as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = 10;
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (

    <div
      class={` flex relative ${!expanded
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
            <button class="bg-[#06F] text-white text-[16px] font-body flex items-center hover:bg-primary/80 px-4 py-1 rounded-lg ">
              <span class="mr-2 text-3xl">+</span> Add Campaign
            </button>
          </Link>

        </div>
        <div class="flex border-b border-border">
          <div className="flex space-x-4">
            <Link to="/LiveCampaign">
              <button
                className={`py-2 px-4 text-primary  ${location.pathname === '/LiveCampaign'
                    ? ' font-semibold border-b-2 border-blue-500'
                    : ''
                  }`}
              >
                Live campaigns
              </button>
            </Link>
            <Link to="/PastCampaign">
              <button
                className={`py-2 px-4 ${location.pathname === '/PastCampaign'
                    ? 'text-primary border-b-2 border-blue-500 font-semibold'
                    : 'text-muted hover:text-muted-foreground'
                  }`}
              >
                Past campaigns
              </button>
            </Link>
            <Link to="/DraftCampaign">
              <button
                className={`py-2 px-4 ${location.pathname === '/DraftCampaign'
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
                <LuFilter className="mr-2 text-base text-gray-500" /> Filter
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

        <div className="flex flex-col md:flex-row mt-4 text-start items-start md:items-center justify-between">
          <table className="w-full ">
            <thead>
              <tr className="border-b-2 h-[91px]  ">
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">CAMPAIGN ID</th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">CAMPAIGN NAME</th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">STATUS</th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">PLATFORM</th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">START DATE</th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">END DATE</th>
                {/* <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">ACTION</th> */}
              </tr>
            </thead>
            <tbody >
              {campaigns.map((campaign, index) => (
                <tr key={index} className="border-b-2 h-[91px] ">
                  <td className="border-zinc-300 text-[16px] font-normal font-body p-2">{campaign.id}</td>
                  <td className="border-zinc-300 text-[16px] font-normal font-body p-2">{campaign.name}</td>
                  <td className="border-zinc-300 text-[16px] font-normal p-2">
                    <span className={`font-body bg-[#FFEAB0]  justify-center items-center p-1 gap-1 flex rounded-full ${campaign.status === "Draft" ? "text-[#363939]" : ""}`}>
                      <FaCircleDot className='text-[#FACC15]' /> {campaign.status}
                    </span>
                  </td>
                  <td className="border-zinc-300 text-[16px] font-normal font-body p-2">{campaign.platform}</td>
                  <td className="border-zinc-300 text-[16px] font-normal font-body p-2">{campaign.startDate}</td>
                  <td className="border-zinc-300 text-[16px] font-normal font-body p-2">{campaign.endDate}</td>
                  <td className="border-zinc-300 p-2">
                    <button className="text-[#000000] flex items-center px-8 py-2 gap-2 font-body text-[14px] font-normal border border-[#B6B6B6] rounded-lg cursor-pointer">Edit </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* pagination */}
        {/* <div className="my-4 mt-10 flex  justify-end ">
          <div className='flex items-center gap-4'>
          <span> <IoIosArrowBack className='text-[#797A7B]' /></span>
            <text className="text-[14px] font-normal items-center font-body "> Page 1 <span className='text-[#797A7B]'>of 10 </span></text>
            <span><IoIosArrowForward /></span>
            </div>
        </div> */}

        <div className="flex mt-6 items-center justify-end space-x-4 p-4">
          <button
            onClick={handlePrevClick}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg"
          >
            <span> <IoIosArrowBack className='text-[#797A7B]' /></span>
          </button>
          <span className="text-muted-foreground">
            Page <span>{currentPage}</span> of <span>{totalPages}</span>
          </span>
          <button
            onClick={handleNextClick}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg"
          >
            <span><IoIosArrowForward /></span>
          </button>
        </div>


      </div>
    </div>

  )
}

export default DraftCampaign