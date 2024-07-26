import React, { useContext, useState } from "react";
import { Mycontext } from "../utils/Context";
import { Checkbox, FormControlLabel } from "@mui/material";
import Slider from "@mui/material/Slider";
import { MdClose, MdKeyboardArrowUp } from "react-icons/md";
import { Columns3 } from "lucide-react";
import { Columns4 } from "lucide-react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaStar, FaRegStar } from "react-icons/fa";

import ImageComp from "./Star";
import { Link, useLocation } from "react-router-dom";

const DiscoverInfluencer = () => {
  const categories = [
    "Automobile",
    "Beauty",
    "Business",
    "Decor",
    "Fashion",
    "Fitness",
    "Food",
    "Gaming",
    "Health",
    "Lifestyle",
    "Marketing",
    "Travel",
    "Technology",
    "Health & Fitness",
    "Beauty",
    "Finanace",
    "Pet",
    "Food",
    "Gaming",
    "Vloger",
    "Cleb",
    "AI",
    "Business",
    "Tech",
  ];
  const LocationData = [
    "Mumbai",
    "New Delhi",
    "Pune",
    "Nagpur",
    "Banglore",
    "Hyderabad",
    "Chennai",
    "Dehradun",
  ];
  const GenderData = ["Male", "Female", "Other"];
  const ReachData = [
    "nano 1-10k",
    "micro 10k-100k",
    "macro 100k-1M",
    "mega 1M+",
  ];
  const FollowerData = [
    "1000-10000",
    "10000-50000",
    "50000-100000",
    "100000-500000",
    "500000-1000000",
    "1000000+",
  ];
  const AgeData = [
  
    "18- 24 years",
    "25- 34 years",
    "35- 44 years",
    "45- 54 years",
    "55- 64 years",
    "64 years+",
  ];

  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedReach, setSelectedReach] = useState([]);
  const [selectedFollower, setSelectedFollower] = useState([]);
  const [selectedAge, setSelectedAge] = useState([]);
  const [range, setRange] = useState([0, 100000]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedStars, setSelectedStars] = useState([]);
  const starRatings = [1, 2, 3, 4, 5];

  const [open, setOpen] = useState();
  const [open2, setOpen2] = useState();
  const [open3, setOpen3] = useState();
  const [open4, setOpen4] = useState();
  const [open5, setOpen5] = useState();
  const [open6, setOpen6] = useState();
  const [open7, setOpen7] = useState();
  const [open8, setOpen8] = useState();

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleLocation = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((item) => item !== location)
        : [...prev, location]
    );
  };

  const handleGender = (gender) => {
    setSelectedGender((prev) =>
      prev.includes(gender)
        ? prev.filter((item) => item !== gender)
        : [...prev, gender]
    );
  };

  const handleReach = (reach) => {
    setSelectedReach((prev) =>
      prev.includes(reach)
        ? prev.filter((item) => item !== reach)
        : [...prev, reach]
    );
  };

  const handleFollower = (follower) => {
    setSelectedFollower((prev) =>
      prev.includes(follower)
        ? prev.filter((item) => item !== follower)
        : [...prev, follower]
    );
  };

  const handleAge = (age) => {
    setSelectedAge((prev) =>
      prev.includes(age) ? prev.filter((item) => item !== age) : [...prev, age]
    );
  };

  const handleStarChange = (star) => {
    setSelectedStars((prev) =>
      prev.includes(star)
        ? prev.filter((item) => item !== star)
        : [...prev, star]
    );
  };

  const selectedValues = [
    ...selectedLocation.map((item) => ({ type: "Location", value: item })),
    ...selectedCategories.map((item) => ({ type: "Category", value: item })),
    ...selectedGender.map((item) => ({ type: "Gender", value: item })),
    ...selectedReach.map((item) => ({ type: "Reach", value: item })),
    ...selectedFollower.map((item) => ({ type: "Follower", value: item })),
    ...selectedAge.map((item) => ({ type: "Age", value: item })),
  ];

  const removeItem = (item, type) => {
    if (type === "Category") {
      setSelectedCategories((prev) => prev.filter((i) => i !== item));
    } else if (type === "Gender") {
      setSelectedGender((prev) => prev.filter((i) => i !== item));
    } else if (type === "Reach") {
      setSelectedReach((prev) => prev.filter((i) => i !== item));
    } else if (type == "Location") {
      setSelectedLocation((prev) => prev.filter((i) => i !== item));
    } else if (type == "Follower") {
      setSelectedFollower((prev) => prev.filter((i) => i !== item));
    } else if (type == "Age") {
      setSelectedAge((prev) => prev.filter((i) => i !== item));
    }
  };

  const renderStarIcons = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => {
          const starRating = index + 1;
          return starRating <= rating ? (
            <FaStar key={starRating} className="text-yellow-500" />
          ) : (
            <FaRegStar key={starRating} className="text-yellow-500" />
          );
        })}
      </div>
    );
  };

  const renderSelectedStars = () => {
    return (
      <div className="px-4 py-2">
        <div className="flex flex-wrap space-x-2">
          {selectedStars.map((rating) => (
            <div
              key={rating}
              className="flex items-center bg-blue-700 text-white px-3 py-1 rounded-full space-x-1"
            >
              {renderStarIcons(rating)}
              <button
                onClick={() =>
                  setSelectedStars(
                    selectedStars.filter((star) => star !== rating)
                  )
                }
              >
                <MdClose className="text-white text-[14px]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ---range-------

  const handleRangeChange = (event, newRange) => {
    setRange(newRange);
  };

  const handleAddRange = () => {
    setSelectedValue([
      ...selectedValue,
      { value: `$${range[0]} - $${range[1]}`, type: "range" },
    ]);
  };

  const removeItem1 = (value) => {
    setSelectedValue(selectedValue.filter((item) => item.value !== value));
  };

  // form image layout

  const [isThreeColumn, setIsThreeColumn] = useState("columns3");
  const [gridColumns, setGridColumns] = useState(3);

  const handleThreeColumnClick = () => {
    setIsThreeColumn("columns3");
    setGridColumns(3);
  };

  const handleFourColumnClick = () => {
    setIsThreeColumn("columns4");
    setGridColumns(4);
  };
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <div
        className={`flex relative top-[131px] ${
          !expanded
            ? "left-[100px] w-[calc(100%-110px)]"
            : "left-[350px] w-[calc(100%-360px)]"
        }  overflow-y-auto  bg-[#F5F5F5] space-y-4`}
      >
        <div className={`${!expanded ? "w-full" : "w-[1080px]  "}`}>
        <div className="h-[72px] bg-white p-6 pl-6 rounded-[10px] mr-[10px]">
  <Link
    to="/discoverInfluencers"
    className={`font-body text-[16px] font-semibold ${
      currentPath === '/discoverInfluencers' ? 'text-blue-700' : 'text-black'
    }`}
  >
    Discover Influencers
  </Link>
</div>

          <br />
          <div className="flex  gap-11 ">
            <div
              className={`${
                !expanded ? "w-[200px]" : "w-[196px]  "
              }   rounded-[10px] bg-white`}
            >
              {/* ----Location---- */}
              <div
                className="  flex justify-between px-4 py-4 cursor-pointer "
                onClick={() => setOpen2(!open2)}
              >
                <h2 className="text-[16px] text-blue-700  font-body font-semibold ">
                  Location
                </h2>
                <button>
                  <MdKeyboardArrowUp
                    className={`text-2xl transition-transform duration-500 text-[#666666]  ${
                      open2 ? " rotate-0 " : "rotate-180"
                    } `}
                  />
                </button>
              </div>
              {open2 && (
                <div className=" px-4">
                  {LocationData.map((location) => (
                    <label
                      key={location}
                      className={`flex  font-body font-normal text-[14px] items-center justify-between  ${
                        selectedLocation.includes(location)
                          ? "text-blue-600"
                          : " text-[#767676]"
                      }`}
                      style={{ marginTop: "-8px" }}
                    >
                      <span>{location}</span>
                      <FormControlLabel
                        key={location}
                        labelPlacement="start"
                        control={
                          <Checkbox
                            size="small"
                            checked={selectedLocation.includes(location)}
                            onChange={() => handleLocation(location)}
                          />
                        }
                      />
                    </label>
                  ))}
                </div>
              )}

              {/* --- categories---- */}

              <div
                className=" flex justify-between  px-4 py-3 cursor-pointer "
                onClick={() => setOpen(!open)}
              >
                <h2 className="text-[16px]  font-body text-blue-700 font-semibold ">
                  Categories
                </h2>
                <button>
                  <MdKeyboardArrowUp
                    className={`text-2xl transition-transform duration-500 text-[#666666]  ${
                      open ? " rotate-0 " : "rotate-180"
                    } `}
                  />
                </button>
              </div>
              {open && (
                <div className=" px-4">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className={`flex  font-body font-normal text-[14px] items-center justify-between  ${
                        selectedCategories.includes(category)
                          ? "text-blue-700"
                          : "text-[#767676]"
                      }`}
                      style={{ marginTop: "-8px" }}
                    >
                      <span>{category}</span>
                      <FormControlLabel
                        key={category}
                        labelPlacement="start"
                        control={
                          <Checkbox
                            size="small"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCheckboxChange(category)}
                          />
                        }
                      />
                    </label>
                  ))}
                </div>
              )}

        {/*--------Gender-----  */}

              <div
                className=" flex justify-between px-4 py-3 cursor-pointer "
                onClick={() => setOpen3(!open3)}
              >
                <h2 className="text-[16px] text-blue-700 font-body font-semibold ">
                  Gender
                </h2>
                <button>
                  <MdKeyboardArrowUp
                    className={`text-2xl text-[#666666]  ${
                      open3 ? " rotate-0 " : "rotate-180"
                    } `}
                  />
                </button>
              </div>
              {open3 && (
                <div className=" px-4">
                  {GenderData.map((gender) => (
                    <label
                      key={gender}
                      className={`flex  font-body font-normal text-[14px] items-center justify-between  ${
                        selectedGender.includes(gender)
                          ? "text-blue-700"
                          : "text-[#767676]"
                      }`}
                      style={{ marginTop: "-8px" }}
                    >
                      <span>{gender}</span>
                      <FormControlLabel
                        key={gender}
                        labelPlacement="start"
                        control={
                          <Checkbox
                            size="small"
                            checked={selectedGender.includes(gender)}
                            onChange={() => handleGender(gender)}
                          />
                        }
                      />
                    </label>
                  ))}
                </div>
              )}

              {/*--------Reach-----  */}

              <div
                className=" flex justify-between px-4 py-3 cursor-pointer "
                onClick={() => setOpen4(!open4)}
              >
                <h2 className="text-[16px] font-body text-blue-700 font-semibold ">
                  Reach
                </h2>
                <button>
                  <MdKeyboardArrowUp
                    className={`text-2xltransition-transform duration-500 text-[#666666]  ${
                      open4 ? " rotate-0 " : "rotate-180"
                    } `}
                  />
                </button>
              </div>
              {open4 && (
                <div className=" px-4">
                  {ReachData.map((reach) => (
                    <label
                      key={reach}
                      className={`flex  font-body font-normal text-[14px] items-center justify-between  ${
                        selectedReach.includes(reach)
                          ? "text-blue-700"
                          : "text-[#767676]"
                      }`}
                      style={{ marginTop: "-8px" }}
                    >
                      <span>{reach}</span>
                      <FormControlLabel
                        key={reach}
                        labelPlacement="start"
                        control={
                          <Checkbox
                            size="small"
                            checked={selectedReach.includes(reach)}
                            onChange={() => handleReach(reach)}
                          />
                        }
                      />
                    </label>
                  ))}
                </div>
              )}

              {/*--------Followers-----  */}

              <div
                className=" flex justify-between px-4 py-3 cursor-pointer "
                onClick={() => setOpen5(!open5)}
              >
                <h2 className="text-[16px] font-body text-blue-700 font-semibold ">
                  {" "}
                  Followers{" "}
                </h2>
                <button>
                  <MdKeyboardArrowUp
                    className={`text-2xl transition-transform duration-500 text-[#666666]  ${
                      open5 ? " rotate-0 " : "rotate-180"
                    } `}
                  />
                </button>
              </div>
              {open5 && (
                <div className=" px-4">
                  {FollowerData.map((follower) => (
                    <label
                      key={follower}
                      className={`flex  font-body font-normal text-[14px] items-center justify-between  ${
                        selectedFollower.includes(follower)
                          ? "text-blue-700"
                          : "text-[#767676]"
                      }`}
                      style={{ marginTop: "-8px" }}
                    >
                      <span>{follower}</span>
                      <FormControlLabel
                        key={follower}
                        labelPlacement="start"
                        control={
                          <Checkbox
                            size="small"
                            checked={selectedFollower.includes(follower)}
                            onChange={() => handleFollower(follower)}
                          />
                        }
                      />
                    </label>
                  ))}
                </div>
              )}

              {/*--------Budget-----  */}

              <div
                className=" flex justify-between px-4 py-3 cursor-pointer "
                onClick={() => setOpen6(!open6)}
              >
                <h2 className="text-[16px]  text-blue-700 font-semibold  font-body">
                  Budget
                </h2>
                <button>
                  <MdKeyboardArrowUp
                    className={`text-2xl text-[#666666] transition-transform duration-500 ${
                      open6 ? " rotate-0 " : "rotate-180"
                    } `}
                  />
                </button>
              </div>

              {open6 && (
                <div className="space-y-4 p-4 ">
                  <div className="relative">
                    <Slider
                      value={range}
                      onChange={handleRangeChange}
                      valueLabelDisplay="auto"
                      min={0}
                      max={100000}
                      sx={{
                        width: "146.88px",
                        color: "#3b82f6",
                        "& .MuiSlider-thumb": {
                          backgroundColor: "#3b82f6",
                        },
                      }}
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-[10px] font-body font-normal text-[#363939]">
                        0
                      </span>
                      <span className="text-[10px] font-body font-normal text-[#363939]">
                        10000+
                      </span>
                    </div>
                  </div>

                  {/* ---input --min-max-- */}
                  <div className="flex gap-3">
        <div className="relative">
          <BsCurrencyDollar className="text-[#797a7b] absolute w-[10px] h-[15px] top-1/2 transform -translate-y-1/2 left-2" />
          <input
            type="number"
            name="min"
            placeholder="MIN"
            value={range[0]}
            onChange={(e) => setRange([Math.min(Number(e.target.value), range[1] - 1), range[1]])}
            className="pl-8 text-[#797a7b] border border-[#363939] text-[10px] font-body font-normal rounded-lg w-[74.5px] h-[25px] px-4"
          />
        </div>
        <div className="relative">
          <BsCurrencyDollar className="text-[#797a7b] absolute w-[10px] h-[15px] top-1/2 transform -translate-y-1/2 left-2" />
          <input
            type="number"
            name="max"
            placeholder="MAX"
            value={range[1]}
            onChange={(e) => setRange([range[0], Math.max(Number(e.target.value), range[0] + 1)])}
            className="pl-4 text-[#797a7b] border border-[#363939] text-[10px] font-body font-normal rounded-lg w-[74.5px] h-[25px] px-4"
          />
        </div>
      </div>
      <button
        onClick={handleAddRange}
        className="bg-blue-700 text-white px-3 py-1 text-[12px] rounded mt-2 m-7"
      >
        Add Range
      </button>
          </div>
              )}

              {/*--------rating-----  */}

              <div
                className=" flex justify-between px-4 py-3 cursor-pointer "
                onClick={() => setOpen7(!open7)}
              >
                <h2 className="text-[16px]  text-blue-700 font-semibold  font-body">
                  {" "}
                  Rating{" "}
                </h2>
                <button>
                  <MdKeyboardArrowUp
                    className={`text-2xl transition-transform duration-500 text-[#666666]  ${
                      open7 ? " rotate-0 " : "rotate-180"
                    } `}
                  />
                </button>
              </div>
              {open7 && (
                <div id="star-filter-content" className="px-4">
                  {starRatings.map((rating) => (
                    <div
                      key={rating}
                      className="flex items-center justify-between mb-2"
                    >
                      <div className="flex items-center">
                        {renderStarIcons(rating)}
                      </div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            size="small"
                            checked={selectedStars.includes(rating)}
                            onChange={() => handleStarChange(rating)}
                          />
                        }
                        label=""
                        labelPlacement="start"
                        style={{ marginLeft: "10px" }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/*--------Age-----  */}

              <div
                className=" flex justify-between px-4 py-3 cursor-pointer "
                onClick={() => setOpen8(!open8)}
              >
                <h2 className="text-[16px]  text-blue-700 font-semibold  font-body">
                  {" "}
                  Age
                </h2>
                <button>
                  <MdKeyboardArrowUp
                    className={`text-2xl  text-[#666666]   ${
                      open8 ? " rotate-0 " : "rotate-180"
                    } `}
                  />
                </button>
              </div>

              {open8 && (
                <div className=" px-4">
                  {AgeData.map((age) => (
                    <label
                      key={age}
                      className={`flex  font-body font-normal text-[14px] items-center justify-between  ${
                        selectedAge.includes(age)
                          ? "text-blue-700"
                          : "text-[#767676]"
                      }`}
                      style={{ marginTop: "-8px" }}
                    >
                      <span>{age}</span>
                      <FormControlLabel
                        key={age}
                        labelPlacement="start"
                        control={
                          <Checkbox
                            size="small"
                            checked={selectedAge.includes(age)}
                            onChange={() => handleAge(age)}
                          />
                        }
                      />
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className={`${!expanded ? "w-[1100px]" : "w-[776px]  "} `}>
              <div className="px-4 py-2 flex items-center h-[20px] justify-between ">
                <h3 className="text-[16px]  font-body font-semibold">
                  All Influencers
                </h3>
                <div className="">
                  <button
                    className={`m-3   ${
                      isThreeColumn === "columns3"
                        ? "text-blue-700"
                        : "text-gray-500"
                    }`}
                    onClick={handleThreeColumnClick}
                  >
                    <Columns3 className={`text-3xl`} />
                  </button>
                  <button
                    className={`${
                      isThreeColumn === "columns4"
                        ? "text-blue-700"
                        : "text-gray-500"
                    }`}
                    onClick={handleFourColumnClick}
                  >
                    <Columns4 className={`text-3xl `} />
                  </button>
                </div>
              </div>

              {/* Display Selected Values */}

              {selectedValues.length > 0 && (
                <div className="px-4 py-2">
                  <div className="flex flex-wrap space-x-2">
                    {selectedValues.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-blue-700 text-white mt-2 px-3 py-1 rounded-full space-x-1"
                      >
                        <span className="text-[14px]">{item.value}</span>

                        <button
                          onClick={() => removeItem(item.value, item.type)}
                        >
                          <MdClose className="text-white text-[14px]" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
               {/* ---for Budget-- */}
             {selectedValue.length > 0 && (
        <div className="px-4 py-2">
          <div className="flex flex-wrap space-x-2">
            {selectedValue.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-blue-700 text-white px-3 py-1 rounded-full space-x-1"
              >
                <span className="text-[14px]">{item.value}</span>
                <button
                  onClick={() => removeItem1(item.value)}
                >
                  <MdClose className="text-white text-[14px]" />
                </button>
              </div>
            ))}
          </div>
        </div>
              )}

              {selectedStars.length > 0 && renderSelectedStars()}

              
              <ImageComp gridColumns={gridColumns}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverInfluencer;
