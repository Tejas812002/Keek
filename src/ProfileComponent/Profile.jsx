import React, { useContext, useState } from "react";
import { Mycontext } from "../utils/Context";
import Img4 from "../Assets/Img4.jpg";
import Img3 from "../Assets/Img3.jpg";
import Img2 from "../Assets/Img2.jpg";
import Img1 from "../Assets/Img1.jpg";
import Profile from "../Assets/Profile.jpg";
import I1 from "../Assets/I1.jpg";
import I2 from "../Assets/I2.png";
import I3 from "../Assets/I3.jpg";
import I4 from "../Assets/I4.jpg";
import I5 from "../Assets/I5.jpg";
import { Link, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "USA", value: 30000 },
  { name: "India", value: 40000 },
  { name: "Canada", value: 20000 },
  { name: "Singapure", value: 10000 },
  { name: "Dubai", value: 30000 },
];
const COLORS = ["#C9EEFF", "#A3E1FF", "#5BB2DD", "#0575AD", "#033D5A"];
const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);

const name = data.map((entry) => entry.name);
const value = data.map((entry) =>
  ((entry.value / totalValue) * 100).toFixed(1)
);

const ViewProfile = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;

  const [favorites, setFavorites] = useState(true);

  const socialSitesData = [
    { name: "Instgram", logo: I5, followers: "1M" },
    { name: "Facebook", logo: I3, followers: "1.2M" },
    { name: "Snapchat", logo: I4, followers: "2M" },
    { name: "X", logo: I1, followers: "1.2M" },
    { name: "Youtube", logo: I2, followers: "1.2M" },
  ];
  const location = useLocation();
  const currentPath = location.pathname;
  const handleHeartIcon = () => {
    setFavorites(!favorites);
    /// Aslo need to add this profile to savedlist
  };
  return (
    <div
      className={`flex relative top-[131px] ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[350px] w-[calc(100%-360px)]"
      }  overflow-y-auto  bg-[#F5F5F5] space-y-4`}
    >
      <div className="w-full ">
        <div>
          <div className="h-[72px] pl-8 mr-[37px] bg-white content-center flex items-center">
            <Link
              to="/discoverInfluencers"
              className={`bg-white rounded-lg flex flex-row font-semibold font-body text-base justify-center items-center ${
                currentPath === "/discover"
                  ? "text-[#2463eb]"
                  : "text-[#384EDD]"
              }`}
            >
              <p
                className={`font-body ${
                  currentPath === "/discover" ? "text-[#2463eb]" : "text-black"
                }`}
              >
                Discover
              </p>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <g id="arrows/chevron-right">
                  <path
                    id="Icon"
                    d="M6.91225 12.5824C6.65685 12.327 6.65685 11.9129 6.91225 11.6575L10.3737 8.19603L6.91225 4.73455C6.65685 4.47915 6.65685 4.06507 6.91225 3.80968C7.16765 3.55428 7.58173 3.55428 7.83713 3.80968L11.761 7.73359C12.0164 7.98899 12.0164 8.40307 11.761 8.65846L7.83713 12.5824C7.58173 12.8378 7.16765 12.8378 6.91225 12.5824Z"
                    fill="#202024"
                  />
                </g>
              </svg>
            </Link>
            <Link to={"/viewProfile"}>
              <span
                className={`ml-1 ${
                  currentPath === "/discover"
                    ? "text-[#2463eb]"
                    : "text-[#384EDD]"
                }`}
              >
                View Profile
              </span>
            </Link>
          </div>

          <div className="flex items-center pl-8 bg-white h-[206px]  content-center mr-[37px] mt-6">
            <div className="flex justify-center  item-center">
              <div className="flex">
                <img
                  src={Profile}
                  className="w-[170px] h-[170px] pt-[16px] pb-[20px]"
                  alt="Profile"
                />
                <div class="flex flex-col bg-white rounded-lg py-[16px] pl-[54px]">
                  <div className="flex flex-row justify-between items-center">
                    <div className=" flex flex-row">
                      <h1 className="flex text-[19px]  font-semibold">
                        {" "}
                        Gautam Sachdeva
                      </h1>
                      <div className="flex  h-[30px] pl-[30px] justify-between items-center ">
                        <button className="text-white w-[135px] text-xs  px-[12.55px] py-[7.84px] justify-center rounded-md font-bold bg-gradient-to-r from-[#1E3BDD] to-[#1D9ED5] items-center">
                          Colloboration
                        </button>
                      </div>
                    </div>

                    <div className="mr-6" onClick={handleHeartIcon}>
                      {!favorites ? (
                        <FaHeart className=" text-red-500 text-3xl justify-end" />
                      ) : (
                        <FaHeart className="text-gray-300 text-3xl justify-end" />
                      )}
                    </div>
                  </div>
                  <p className="flex text-[14px] mr-6 font-semibold text-[#818181] pt-[22px]">
                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <h2 className="flex items-center  text-[14px] pt-[24px]  font-semibold text-[#000000]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.27"
                      height="15"
                      viewBox="0 0 15 17"
                      fill="none"
                    >
                      <path
                        d="M13.2727 7.13636C13.2727 11.9091 7.13636 16 7.13636 16C7.13636 16 1 11.9091 1 7.13636C1 5.5089 1.64651 3.94809 2.7973 2.7973C3.94809 1.64651 5.5089 1 7.13636 1C8.76383 1 10.3246 1.64651 11.4754 2.7973C12.6262 3.94809 13.2727 5.5089 13.2727 7.13636Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.13628 9.18173C8.26595 9.18173 9.18173 8.26595 9.18173 7.13628C9.18173 6.0066 8.26595 5.09082 7.13628 5.09082C6.0066 5.09082 5.09082 6.0066 5.09082 7.13628C5.09082 8.26595 6.0066 9.18173 7.13628 9.18173Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="pl-2">Delhi, India</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-[14px]">
            <div class="box-border w-full inline-flex items-center gap-[12px] place-content-evenly ">
              {socialSitesData.map((platform, index) => (
                <div
                  key={index}
                  className="flex box-border w-[250px] items-center space-x-6 self-stretch rounded-[10px] bg-[#CAE8FF] px-[12px]"
                >
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="w-10 h-10 rounded "
                  />
                  <div className="flex flex-col items-start h-[89px] py-[12px] pr-[16px] ">
                    <h3 className="h-[20px] text-[#000] mb-[10px] non-italic font-semibold">
                      {platform.name}
                    </h3>
                    <h5 className="h-[15px] text-[#000] text-[12px] non-italic font-normal ">
                      Followers
                    </h5>
                    <h4 className="bg-rgba-black-075 text-[14px] non-italic font-bold">
                      {platform.followers}
                    </h4>
                  </div>
                </div>
              ))}
                    
            </div>
          </div>

          <div className="flex items-center pt-[24px]">
            <div className="flex flex-col mr-[37px]">
              <div className="space-y-6">
                <div className="flex flex-row gap-4 w-full">
                  <div className={`flex flex-col space-y-6 w-1/2`}>
                    <div className="flex items-center content-center rounded-lg h-[70px] px-[33px] bg-white">
                      <div className=" mt-2 font-semibold text-lg text-[#384EDD]">
                        Work Success Ratio
                        <p1 className="text-[#22C55E] text-lg pl-[24px]">
                          87%
                        </p1>
                      </div>
                    </div>

                    <div className="flex items-center rounded-lg content-center h-[90px] px-[40px] bg-white ">
                      <div>
                        <div className=" text-lg mt-2 text-[#384EDD] font-semibold">
                          Influencer Category
                        </div>
                        <p className=" text-lg text-[#818181]">
                          Travel, Food, Fashion, Gaming.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center rounded-lg content-center h-[90px] px-[40px]  bg-white ">
                      <div>
                        <div className="text-lg mt-2   font-semibold text-[#384EDD]">
                          Brand Collaboration
                        </div>
                        <p className=" text-lg text-[#818181]">
                          Gucci, Zara, Channel, Sony, Netflix , H&M.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 ">
                    <div
                      className={`py-4 px-6 rounded-[10px]  h-[299px] bg-white ${
                        !expanded ? "w-[680px]" : "w-full"
                      } `}
                    >
                      <h5 className=" text-gray-900 font-bold text-base">
                        Audience Demographics
                      </h5>
                      <div className="flex flex-row h-full relative ">
                        <div className="w-1/2 ml-4 mr-4">
                          <ResponsiveContainer>
                            <PieChart
                              width={200}
                              height={200}
                              style={{ left: "-25px", top: "-10px" }}
                            >
                              <Pie
                                data={data}
                                cx={120}
                                // cy={200}
                                innerRadius={60}
                                outerRadius={90}
                                fill="#8884d8"
                                paddingAngle={3}
                                dataKey="value"
                              >
                                {data.map((entry, index) => (
                                  <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                  />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="w-[208px] h-full mt-10">
                          {data.map((entry, index) => (
                            <div
                              key={`legend-${index}`}
                              className=" flex border-b border-[#E4E4E4] justify-between py-1 px-2"
                            >
                              <div className="flex  items-center">
                                <span
                                  className="mr-2 text-sm "
                                  style={{
                                    color: COLORS[index % COLORS.length],
                                  }}
                                >
                                  <GoDotFill />
                                </span>
                                <span className="text-sm font-semibold text-black">
                                  {entry.name}
                                </span>
                              </div>
                              <div>
                                <span className="text-sm font-normal text-black ">
                                  {((entry.value / totalValue) * 100).toFixed(
                                    1
                                  )}
                                  %
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center content-center bg-white h-[140px] px-[44px]  mt-10">
                  <div>
                    <div className=" text-lg mt-2 font-semibold text-[#384EDD]">
                      Work History
                    </div>
                    <p className=" text-lg text-[#818181]">
                      Worem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.Worem ipsum
                      dolor sit amet, consectetur adipiscing elit. er conubia
                      nostra, per inceptos himenaeos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-[24px] pl-[19px] h-[261px] w-full pr-[65px]">
            <div className="flex  items-center content-center gap-x-8">
              <div>
                <img src={Img4} alt="Img4" />
                <p className="text-sm ">
                  Worem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div>
                <img src={Img3} alt="Img3" />
                <p className="text-sm ">
                  Worem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div>
                <img src={Img2} alt="Img2" />
                <p className="text-sm ">
                  Worem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div>
                <img src={Img1} alt="Img1" />
                <p className="text-sm ">
                  Worem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
