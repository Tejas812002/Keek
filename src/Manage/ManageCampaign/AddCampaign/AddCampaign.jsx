import React, { useContext, useState } from "react";

import { Mycontext } from "../../../utils/Context";


const AddCampaign = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
 
  return (
    <div
      className={`relative max-h-[1066px] mx-6 bg-white  ${
        !expanded
          ? "left-[90px] w-[calc(100%-150px)]"
          : "left-[320px] w-[calc(100%-390px)]"
      } rounded-xl drop-shadow-md`}
    >
      <div className="bg-white w-screen h-screen top-28 my-4 left-[311px] w-full rounded-xl">
     campaign
      </div>
    </div>
  );
};

export default AddCampaign;
