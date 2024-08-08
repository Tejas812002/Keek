import React, { useContext } from "react";
import Instagram from "../../../../Assets/instagram.png";
import Facebook from "../../../../Assets/Facebook.png";
import X from "../../../../Assets/X.png";
import YT from "../../../../Assets/yt.png";
import { Link, useLocation } from "react-router-dom";
import { Mycontext } from "../../../../utils/Context";
import { MdChevronRight } from "react-icons/md";
import ReadMore from "../../Components/ReadMoreComponent";


const RejectedPage = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const currentPath = location.pathname;
  const campaignDetails = {
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.",
    compensation: "Product/Money",
    targetAudience: "Men, Women / 18-25 years old",
    participants: "10/",
    location: ["New Delhi, India", "New Delhi, India", "New Delhi, India"],
  };
  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      bgColor: "#FFEDED",
    },
    {
      name: "X",
      icon: X,
      bgColor: "#E3E3E3",
    },
    {
      name: "Facebook",
      icon: Facebook,
      bgColor: "#E4EFFF",
    },
    {
      name: "Youtube",
      icon: YT,
      bgColor: "#FFE4E1",
    },
  ];
  return (
    <div
      class={` flex relative ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div className="flex flex-col">
    

        <div className="flex border-b border-border">
        <div className="flex space-x-4">
            <Link to="/manageCampaign">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/manageCampaign"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
               Interest Received
              </button>
            </Link>
            <Link to="/manageCampaign/Shortlisted">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/manageCampaign/Shortlisted"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Shortlisted
              </button>
            </Link>
            <Link to="/manageCampaign/Approved">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/manageCampaign/Approved"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
               Approved
              </button>
            </Link>
            <Link to="/manageCampaign/Rejected">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/manageCampaign/Rejected"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
               Rejected
              </button>
            </Link>
            <Link to="/manageCampaign/AIRecommended">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/manageCampaign/AIRecommended"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
              AI Recommended
              </button>
            </Link>
          
          </div>
          <div className="relative">
            <span className="absolute top-0 left-0 transform translate-x-1/2 -translate-y-1/2 bg-destructive rounded-full w-2.5 h-2.5"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectedPage;
