import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CampaignComponent = () => {
  const [liveCampaignsCount, setliveCampaignsCount] = useState(0);
  const [pastCampaignsCount, setPastCampaignsCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setliveCampaignsCount(12);
      setPastCampaignsCount(20);
    }, 1000);
  }, []);

  return (
    <div>
      <div className=" h-[296px] w-[284px] ">
      <div className="flex flex-col justify-between bg-[#CFF38D] pt-[20px] px-[30px] pb-[14px] w-[284px] min-h-[138px] min-w-72 rounded-lg">
        <div className="flex flex-col justify-center items-start gap-[14px] self-stretch">
          <div>
            <p className="text-[16px] not-italic font-semibold leading-[18px] tracking-[1px] uppercase text-[#363939]">
              LIVE CAMPAIGNS
            </p>
            <p className="text-[26px] not-italic pt-[14px] font-semibold leading-[32px] text-[#18181B]">{liveCampaignsCount}</p>
          </div>
        </div>

        <div className="flex justify-end">
        <Link to="/CampaignManagement">
          <button className="bg-[#F6F6F6] p-2 rounded-full">
            <KeyboardArrowRightIcon />
          </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-[#EA8389] pt-[20px] px-[30px] pb-[14px] w-[284px] min-h-[138px] min-w-72 mt-4 rounded-lg">
        <div className="flex flex-col justify-center items-start gap-[14px] self-stretch">
          <div>
            <p className="text-[16px] not-italic font-semibold leading-[18px] tracking-[1px] uppercase text-[#363939]">
              PAST CAMPAIGNS
            </p>
            <p className="text-[26px] not-italic pt-[14px] font-semibold leading-[32px] text-[#18181B]">{pastCampaignsCount}</p>
          </div>
        </div>

        <div className="flex justify-end">
        <Link to="/PastCampaign">

          <button className="bg-[#F6F6F6] p-2 rounded-full">
            <KeyboardArrowRightIcon />
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CampaignComponent;
