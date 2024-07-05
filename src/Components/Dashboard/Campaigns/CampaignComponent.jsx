import React, { useState, useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import CountUp from "react-countup";

const CampaignComponent = () => {
  const [activeCampaignsCount, setActiveCampaignsCount] = useState(0);
  const [pastCampaignsCount, setPastCampaignsCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setActiveCampaignsCount(122);
      setPastCampaignsCount(78);
    }, 1000);
  }, []);

  return (
    <div className=" max-h-[296px]" >
     <div class="flex flex-col bg-green-100 p-4 min-h-[138px] min-w-72  rounded-lg  w-1/3">
      <div class="flex justify-between  items-center">
        <div>
          <p class="text-sm text-green-700">ACTIVE CAMPAIGNS</p>
          <p class="text-3xl font-bold">{activeCampaignsCount}</p>
        </div>
        <button class="bg-green-200 p-2 rounded-full">
          <KeyboardArrowRightIcon/>
        </button>
      </div>
    </div>

    <div class="flex flex-col bg-red-100 p-4 min-h-[138px] min-w-72 mt-8 rounded-lg w-1/3">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-sm text-red-700">PAST CAMPAIGNS</p>
          <p class="text-3xl font-bold">{pastCampaignsCount}</p>
        </div>
        <button class="bg-red-200 p-2 rounded-full">
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
    </div>
  );
};

export default CampaignComponent;
