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
    
    <div class="flex flex-col justify-between bg-green-100 p-4 min-h-[138px] min-w-72 rounded-lg">

  <div class="flex justify-between items-center ">
    <div>
      <p class="text-base text-[#57595A]-700">ACTIVE CAMPAIGNS</p>
      <p class="text-3xl font-bold">{activeCampaignsCount}</p>
    </div>
  </div>


  <div class=" flex justify-end">
    <button class="bg-white p-2 mr-4 rounded-full">
      <KeyboardArrowRightIcon />
    </button>
  </div>
</div>


    <div class="flex flex-col justify-between bg-red-100 p-4 min-h-[138px] min-w-72 mt-4 rounded-lg">

  <div class="flex justify-between items-center mb-4">
    <div>
      <p class="text-base  text-[#57595A]-700">PAST CAMPAIGNS</p>
      <p class="text-3xl font-bold">{pastCampaignsCount}</p>
    </div>
  </div>
  

  <div class="flex justify-end">
    <button class="bg-white p-2 mr-4 rounded-full">
      <KeyboardArrowRightIcon />
    </button>
  </div>
</div>
    </div>
  );
};

export default CampaignComponent;
