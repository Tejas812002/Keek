import React, { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation } from "react-router-dom";

const Dashboard = () => {
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
                  location.pathname === "/LiveCampaign"
                    ? " font-semibold border-b-2 border-blue-500"
                    : ""
                }`}
              >
                Live campaigns
              </button>
            </Link>
            <Link to="/PastCampaign">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/PastCampaign"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Past campaigns
              </button>
            </Link>
            <Link to="/DraftCampaign">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/DraftCampaign"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
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
      </div>
    </div>
  );
};

export default Dashboard;
