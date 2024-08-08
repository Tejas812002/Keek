import React, { useContext, useState } from "react";
import Select, { components } from "react-select";
import { PiImageBold } from "react-icons/pi";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { MdChevronRight } from "react-icons/md";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { SlSocialYoutube } from "react-icons/sl";
import { RiErrorWarningLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mycontext } from "../../../utils/Context";
import { IoIosCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import fileImg from "../../../Assets/fileImg.svg"
import { LuCreditCard } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import CampaignSummary from "./CampaignData";
import { Payment } from "@mui/icons-material";

const AddCampaign = () => {
  const contextState = useContext(Mycontext);
   const { campData, setCampData } = useContext(Mycontext);
  const expanded = contextState.expanded;
  const formData = contextState.campData;
  const setFormData = contextState.setCampData;
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [isModalVisible,setIsModalVisible]=useState(false)
  const [descriptionCount, setDescriptionCount] = useState(0);
  
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);



  const platformoptions = [
    { value: "Instagram", label: "Instagram" },
    { value: "Snapchat", label: "Snapchat" },
     { value: "Facebook", label: "Facebook" },
     { value: "Twitter", label: "Twitter" },
  ];

  const locationoptions = [
    { value: "New Delhi", label: "New Delhi" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Pune", label: "Pune" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Banglore", label: "Banglore" },
    { value: "Chennai", label: "Chennai" },
    { value: "Kolkata", label: "Kolkata" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "description") {
      setDescriptionCount(value.length);
    }
    validate(); 
  };

  const handleMultiSelectChange = (selectedOptions, actionMeta) => {
    setFormData({
      ...formData,
      [actionMeta.name]: selectedOptions,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      console.log("Form submitted", formData);
     
    }
  };

  const handleIncrement = (field) => {
    setFormData({
      ...formData,
      [field]: formData[field] + 1,
    });
  };

  const handleDecrement = (field) => {
    setFormData({
      ...formData,
      [field]: formData[field] > 0 ? formData[field] - 1 : 0,
    });
  };



  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newUploadedFiles = [...uploadedFiles, ...files];
    setUploadedFiles(newUploadedFiles);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadstart = () => {
        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [file.name]: 0,
        }));
      };
      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentCompleted = Math.round(
            (event.loaded * 100) / event.total
          );
          setUploadProgress((prevProgress) => ({
            ...prevProgress,
            [file.name]: percentCompleted,
          }));
        }
      };
      reader.onloadend = () => {
        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [file.name]: 100,
        }));
        setFormData((prevFormData) => ({
          ...prevFormData,
          uploadData: newUploadedFiles.map((file) => file.name).join(", "),
        }));
      };
      reader.readAsDataURL(file);
    });
  };


  const handleRemoveUpload = (fileName) => {
    const updatedFiles = uploadedFiles.filter((file) => file.name !== fileName);
    setUploadedFiles(updatedFiles);
    setUploadProgress((prevProgress) => {
      const updatedProgress = { ...prevProgress };
      delete updatedProgress[fileName];
      return updatedProgress;
    });
    setFormData((prevFormData) => ({
      ...prevFormData,
      uploadData: updatedFiles.map((file) => file.name).join(", "),
    }));
  };

  const validate = () => {
    const errors = {};
    
    if (!formData.campaignName) errors.campaignName = "Campaign Name is required";
    if (!formData.description) errors.description = "Description is required";
    if (formData.description.length > 500) errors.description = "Description cannot exceed 500 words";
    if (!formData.selectedOptionsplatform || formData.selectedOptionsplatform.length === 0) errors.platform = "Platform is required";
   
    if (!formData.selectedOptionsindustry || formData.selectedOptionsindustry.length === 0) errors.industry = "Industry is required";
    if (!formData.selectedOptionslocation || formData.selectedOptionslocation.length === 0) errors.location = "Location is required";
    if (!formData.startDate) errors.startDate = "Start Date is required";
    if (!formData.endDate) errors.endDate = "End Date is required";
    if (new Date(formData.endDate) < new Date(formData.startDate)) errors.endDate = "End Date cannot be before Start Date";
    if (!formData.worktype) errors.workType = "Work Type is required";
    if (!formData.amount) errors.amount = "Amount is required"; // For payment
    if (!formData.productDescription) errors.productDescription = "Product Description is required"; // For product
    if (!formData.otherDescription) errors.otherDescription = "Description is required"; // For other
    if (!formData.addDescription) errors.addDescription = "Description is required"; // For addit other
    setErrors(errors);
  
    return Object.keys(errors).length === 0;
  };
  

  const handleNext = (e) => {
    e.preventDefault();
    console.log(formData)
    validate()
    //  && formData.startDate && formData.endDate && formData.AddCampaign)
    if (formData.campaignName && formData.description && formData.selectedOptionsplatform[0]?.value && formData.selectedOptionslocation[0]?.value && formData.startDate && formData.endDate && formData.addDescription &&(formData.payment || formData.product || formData.others)) {

      
      console.log("Form submitted", formData);
      setIsModalVisible(!isModalVisible)
   
    }
    
  };
  const removeSelectedOption = (optionToRemove) => {
    const updatedOptions = formData.selectedOptionsplatform.filter(
      (option) => option.value !== optionToRemove.value
    );
    setFormData({ ...formData, selectedOptionsplatform: updatedOptions,selectedOptionslocation: updatedOptions });
  };

  const MultiValue = () => null;
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <>
    <div
      className={`relative max-h-[1066px] mx-6 bg-white  ${
        !expanded
          ? "left-[90px] w-[calc(100%-150px)]"
          : "left-[320px] w-[calc(100%-350px)]"
      } rounded-xl drop-shadow-md`}
    >
      <div className="bg-white top-28 my-4 left-[311px] w-full rounded-xl">
      <div className="h-[54.85px]  border-b">
      <div className="flex flex-row p-6 items-center gap-[3.14px]">
        <Link
          to="/manageCampaign"
          className={`text-[16px] font-normal flex flex-row ${
            currentPath === '/manageCampaign' ? 'text-[#2463eb]' : ''
          }`}
        >
          Campaigns
          <MdChevronRight className="m-1 items-center" size={"15.7px"} />
        </Link>
        <Link
          to="/AddCampaign"
          className={`text-[16px] font-semibold ${
            currentPath === '/AddCampaign' ? 'text-[#2463eb]' : ''
          } gap-x-2`}
        >
          Add Campaigns
        </Link>
      </div>
    </div>
        <div className="p-6 my-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="text-[18px]">
                Campaign Name <sup className="text-[#2463eb]">*</sup>
              </label>
              <input
                className={`border-[0.7px] mt-2 border-[#363939] rounded-lg w-full px-[19px] py-3 gap-2.5 my-2 focus:outline-none focus:border-blue-600 ${
                  errors.campaignName ? "border-red-500" : ""
                }`}
                type="text"
                name="campaignName"
                id="name"
                value={formData.campaignName}
                onChange={handleChange}
                placeholder="Save Trees and recycle"
              />
              {errors.campaignName && (
                <p className="text-[#FF424C] text-sm flex flex-row gap-1">
                  <span>
                    <RiErrorWarningLine className="m-1" />
                  </span>
                  {errors.campaignName}
                </p>
              )}
            </div>
             
              

            <div className="mb-1">
            <label className="text-[18px]">
            Campaign Description <sup className="text-[#2463eb]">*</sup>
              </label>
              <textarea
                className={`border-[0.7px] mt-2 h-[120px] border-[#363939] rounded-lg w-full px-[19px] p-4 gap-2.5 focus:outline-none focus:border-[#384edd] ${
                  errors.description ? "border-red-500" : ""
                }`}
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write a description about the campaign."
              />
              <div
                className={`text-gray-500 text-sm flex ${
                  errors.description ? "justify-between" : "justify-end"
                }  mr-2`}
              >
                {errors.description && (
                  <p className="text-red-500 text-sm flex flex-row gap-1">
                    <span>
                      <RiErrorWarningLine className="m-1" />
                    </span>
                    {errors.description}
                  </p>
                )}
                <div className="">{descriptionCount}/500</div>
              </div>
            </div>
            {/* platform */}
            <div className="mb-4">
              <label className="text-[18px] font-body font-normal">
                Select Platform <sup className="text-[#2463eb]">*</sup>
              </label>
              <Select
                className={`border-[#363939]  rounded-lg w-full my-2 focus:outline-none focus:border-[#384edd] ${
                  errors.platform ? "border-red-500" : ""
                }`}
                isMulti
                name="selectedOptionsplatform"
                options={platformoptions}
                placeholder="Select Platforms"
                value={formData.selectedOptionsplatform}
                onChange={handleMultiSelectChange}
                components={{ MultiValue }}
                styles={{
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "black",
                    backgroundColor: state.isFocused ? "#DBE0FF" : "white",
                  }),
                  multiValue: (baseStyles) => ({
                    ...baseStyles,
                    display: "none",
                  }),
                }}
              />
              <div className="mt-2 flex flex-wrap">
                {formData.selectedOptionsplatform.map((option) => (
                  <div
                    key={option.value}
                    className="inline-flex items-center px-2 py-1 mr-2 mb-2 bg-[#384EDD] text-sm text-white rounded-full"
                  >
                    <span className="mr-2">{option.label}</span>
                    <button
                      type="button"
                      className="text-white"
                      onClick={() => removeSelectedOption(option)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              {errors.platform && (
                <p className="text-red-500 text-sm flex flex-row gap-1">
                  <span>
                    <RiErrorWarningLine className="m-1" />
                  </span>
                  {errors.platform}
                </p>
              )}
            </div>
             {/* location */}
            <div className="mb-3">
              <label className="text-base">
                Location <sup className="text-[#2463eb]">*</sup>
              </label>
              <Select
                className={`border-[#363939] rounded-lg w-full gap-2.5 my-2 focus:outline-none focus:border-[#384edd] ${
                  errors.location ? "border-red-500" : ""
                }`}
                isMulti
                name="selectedOptionslocation"
                options={locationoptions}
                placeholder="Select Location"
                value={formData.selectedOptionslocation}
                onChange={handleMultiSelectChange}
                components={{ MultiValue }}
                styles={{
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isFocused ? "#DBE0FF" : "white",
                  }),
                  multiValue: (baseStyles) => ({
                    ...baseStyles,
                    color: "white",
                    backgroundColor: "#384EDD",
                    borderRadius: "50px",
                  }),
                  multiValueLabel: (baseStyles) => ({
                    ...baseStyles,
                    color: "white",
                    textAlign: "center",
                  }),
                }}
              />
              <div className="mt-2 flex flex-wrap">
                {formData.selectedOptionslocation.map((option) => (
                  <div
                    key={option.value}
                    className="inline-flex items-center px-2 py-1 mr-2 mb-2 bg-[#384EDD] text-sm text-white rounded-full"
                  >
                    <span className="mr-2">{option.label}</span>
                    <button
                      type="button"
                      className="text-white"
                      onClick={() => removeSelectedOption(option)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              {errors.location && (
                <p className="text-red-500 text-sm flex flex-row gap-1">
                  <span>
                    <RiErrorWarningLine className="m-1" />
                  </span>
                  {errors.location}
                </p>
              )}
            </div>
            
            {/* start date */}
            <div className="flex flex-row justify-start w-full text-gray mb-5">
              <div className="w-1/2 ">
                <label htmlFor="startDate" className=" text-[18px] font-normal font-body" >
                  Start Date<sup className="text-[#2463eb]">*</sup>
                </label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className={`shadow appearance-none w-full px-3 py-2  border rounded-md text-[#B1B2B2] focus:outline-none focus:shadow-outline ${
                    errors.startDate ? "border-red-500" : ""
                  }`}
                />
                {errors.startDate && (
                  <p className="text-red-500 text-sm flex flex-row gap-1">
                    <span>
                      <RiErrorWarningLine className="m-1" />
                    </span>
                    {errors.startDate}
                  </p>
                )}
              </div>
              {/* end date */}
              <div className="self-end mx-6 mt-5">To</div>
              <div className="w-1/2 ">
                <label htmlFor="endDate" className=" text-[18px] font-normal font-body" >
                  End Date<sup className="text-[#2463eb]">*</sup>
                </label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className={`shadow appearance-none w-full px-3 py-2 border rounded-md text-[#B1B2B2] focus:outline-none focus:shadow-outline ${
                    errors.endDate ? "border-red-500" : ""
                  }`}
                />
                {errors.endDate && (
                  <p className="text-red-500 text-sm flex flex-row gap-1">
                    <span>
                      <RiErrorWarningLine className="m-1" />
                    </span>
                    {errors.endDate}
                  </p>
                )}
              </div>
            </div>
              {/* post */}
              <div className="">
              <label className="text-[18px]">
              Deliverables <sup className="text-[#2463eb]">*</sup>
              </label>
            <div className="flex flex-row gap-6 my-6">
              
              <div>
                
                <div
                  className={
                    formData.postCount > 0
                      ? "flex flex-col border-2 border-[#0066FF] items-center justify-center w-[144px] h-[132px] bg-[#E9F2FF] rounded-[10px]"
                      : "flex flex-col items-center  border-2 border-black  justify-center w-[144px] h-[132px] bg-[#F6F5F8] rounded-[10px]"
                  }
                >
                  <PiImageBold size={"24px"} className="text-[#B4B5BF]" />
                  <p className="text-[16px]">Post</p>
                </div>
                <div className="flex flex-row font-semibold w-[122px] ml-3 mt-3 border border-[#B1B2B2] rounded-md">
                  <button
                    className="h-[36px] w-[40px] flex items-center justify-center"
                    type="button"
                    onClick={() => handleDecrement("postCount")}
                  >
                    <CgMathMinus />
                  </button>
                  <span className="w-[39px] h-[36px] border-x border-[#B1B2B2] flex items-center justify-center">
                    {formData.postCount}
                  </span>
                  <button
                    className="h-[36px] w-[40px] flex items-center justify-center"
                    type="button"
                    onClick={() => handleIncrement("postCount")}
                  >
                    <CgMathPlus />
                  </button>
                </div>
              </div>
              <div>
                <div
                  className={
                    formData.reelCount > 0
                      ? "flex flex-col border-2 border-[#0066FF] items-center justify-center w-[144px] h-[132px] bg-[#E9F2FF] rounded-[10px]"
                      : "flex flex-col items-center  border-2 border-black justify-center w-[144px] h-[132px] bg-[#F6F5F8] rounded-[10px]"
                  }
                >
                  <SlSocialYoutube size={"24px"} className="text-[#B4B5BF]"/>
                  <p className="text-[16px]">Reel</p>
                </div>
                <div className="flex flex-row font-semibold w-[122px] ml-3 mt-3 border border-[#B1B2B2] rounded-md">
                  <button
                    className="h-[36px] w-[40px] flex items-center justify-center"
                    type="button"
                    onClick={() => handleDecrement("reelCount")}
                  >
                    <CgMathMinus />
                  </button>
                  <span className="w-[39px] h-[36px] border-x border-[#B1B2B2] flex items-center justify-center">
                    {formData.reelCount}
                  </span>
                  <button
                    className="h-[36px] w-[40px] flex items-center justify-center"
                    type="button"
                    onClick={() => handleIncrement("reelCount")}
                  >
                    <CgMathPlus />
                  </button>
                </div>
              </div>
              <div>
                <div
                  className={
                    formData.storyCount > 0
                      ? "flex flex-col border-2 border-[#0066FF] items-center justify-center w-[144px] h-[132px] bg-[#E9F2FF] rounded-[10px]"
                      : "flex flex-col items-center border-2 border-black justify-center w-[144px] h-[132px] bg-[#F6F5F8] rounded-[10px]"
                  }
                >
                  <HiOutlineVideoCamera size={"24px"} className="font-bold text-[#B4B5BF]" />
                  <p className="text-[16px]">Story</p>
                </div>
                <div className="flex flex-row font-semibold w-[122px] ml-3 mt-3 border border-[#B1B2B2] rounded-md">
                  <button
                    className="h-[36px] w-[40px] flex items-center justify-center"
                    type="button"
                    onClick={() => handleDecrement("storyCount")}
                  >
                    <CgMathMinus />
                  </button>
                  <span className="w-[39px] h-[36px] border-x border-[#B1B2B2] flex items-center justify-center">
                    {formData.storyCount}
                  </span>
                  <button
                    type="button"
                    className="h-[36px] w-[40px]  flex items-center justify-center"
                    onClick={() => handleIncrement("storyCount")}
                  >
                    <CgMathPlus />
                  </button>
                </div>
              </div>
            </div>
            </div>
         

               {/* Payment */}
               <div >
              <label className="text-[18px]">
              Select Mode of Compensation <sup className="text-[#2463eb]">*</sup>
              </label>
            <div className="flex flex-row gap-6 my-4">
                 {/* payment */}
              <div>
                <div onClick={()=>setFormData( {...formData, payment : !formData.payment})}
                  className={`flex cursor-pointer flex-col border-2 items-center justify-center w-[144px] h-[132px] rounded-[10px] 
                   ${formData.payment ? 'border-[#0066FF] bg-[#E9F2FF]':" border-black bg-[#F6F5F8]  "} `}
                >
                  <LuCreditCard size={"24px"} className="text-[#B4B5BF]" />
                  <p className="text-[16px]">Payment</p>
                </div>
              
              </div>

               {/* Product */}
              <div>
                <div onClick={()=>setFormData( {...formData, product : !formData.product})}
                  className={`flex cursor-pointer flex-col border-2 items-center justify-center w-[144px] h-[132px]  rounded-[10px]
                     ${formData.product ? 'border-[#0066FF] bg-[#E9F2FF]':"  border-black bg-[#F6F5F8]" }`}
                >
                  <MdOutlineShoppingCart size={"30px"} className="text-[#B4B5BF]"/>
                  <p className="text-[16px]">Product</p>
                </div>
               
              </div>

              {/* other */}
              <div>
                <div  onClick={()=>setFormData( {...formData, others : !formData.others})}
                  className={`flex cursor-pointer flex-col border-2 items-center justify-center w-[144px] h-[132px]  rounded-[10px] ${formData.others ? 'border-[#0066FF] bg-[#E9F2FF]':"  border-black bg-[#F6F5F8] "}`
                  }
                >
                  <MdOutlineShoppingCart size={"30px"} className="font-bold text-[#B4B5BF]" />
                  <p className="text-[16px]">Other</p>
                </div>
                
              </div>
            </div>
            </div>


               {/* payment extend */}
           {/* Payment */}
{formData.payment && (
  <div className="mt-6">
    <h1 className="text-[18px]">
      Enter Amount <sup className="text-[#2463eb]">*</sup>
    </h1>
    <input
      className={`border-[0.7px] w-[500px] mt-2 border-[#363939] rounded-lg px-[19px] py-3 gap-2.5 my-2 focus:outline-none focus:border-blue-600 ${errors.amount ? 'border-red-500' : ''}`}
      type="number"
      name="amount"
      id="amount"
      placeholder="Amount"
      value={formData.amount || ''}
      onChange={handleChange}
    />
    {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
  </div>
)}

{/* Product */}
{formData.product && (
  <div className="mt-4">
    <h1 className="text-[18px]">
      Product Description <sup className="text-[#2463eb]">*</sup>
    </h1>
    <textarea
      className={`border-[0.7px] mt-2 h-[120px] border-[#363939] rounded-lg w-[500px] px-[19px] p-4 gap-2.5 focus:outline-none focus:border-[#384edd] ${errors.productDescription ? 'border-red-500' : ''}`}
      name="productDescription"
      id="productDescription"
      placeholder="Tell influencers about the product or add link"
      value={formData.productDescription || ''}
      onChange={handleChange}
    />
    {errors.productDescription && <p className="text-red-500 text-sm">{errors.productDescription}</p>}
  </div>
)}

{/* Other */}
{formData.others && (
  <div className="mt-4">
    <h1 className="text-[18px]">
      Add Description <sup className="text-[#2463eb]">*</sup>
    </h1>
    <textarea
      className={`border-[0.7px] mt-2 h-[120px] border-[#363939] rounded-lg w-[500px] px-[19px] p-4 gap-2.5 focus:outline-none focus:border-[#384edd] ${errors.otherDescription ? 'border-red-500' : ''}`}
      name="otherDescription"
      id="otherDescription"
      placeholder="Add description or add link"
      value={formData.otherDescription || ''}
      onChange={handleChange}
    />
    {errors.otherDescription && <p className="text-red-500 text-sm">{errors.otherDescription}</p>}
  </div>
)}

              


       
                     {/* upload display */}
            <div className=" mt-3  ">
              <h1 className="text-[18px] font-normal">Upload Brand Assets<sup className="text-[#2463eb]">*</sup></h1>
              <p className="mt-3 text-[14px] font-body text-[#57595A]">Upload your Brands assets like logo, graphics & much more. These can be used by Influencers for better marketing!</p>
              <div className="flex flex-wrap gap-2">
                  {uploadedFiles.map((file) => (
                    <div
                      key={file.name}
                      className="relative flex items-center px-4 my-2 w-[400px] h-11 bg-[#F9F9F9] border border-[#363939] rounded-lg"
                    >
                      <div className="flex items-center">
                        <img src={fileImg} className="block mx-1" alt="" />
                        <span className="text-sm cursor-default">
                          {file.name}
                        </span>
                      </div>
                      <IoIosCheckmark
                        className={`${
                          uploadProgress[file.name] === 100
                            ? "absolute right-12 text-2xl bg-green-600 rounded-full text-white"
                            : "hidden"
                        }`}
                      />
                      <IoCloseSharp
                        className="absolute right-3 cursor-pointer"
                        onClick={() => handleRemoveUpload(file.name)}
                      />
                     
                    </div>
                  ))}
                </div>
         

            </div>
            <div className="my-2 flex flex-row gap-9">



              {/* upload-- */}
              <label htmlFor="file">
                <div className="flex items-center  justify-center py-3 w-44 cursor-pointer border rounded-[10px] bg-[#0066FF]">
                  <span className="text-sm font-semibold text-white">
                  Upload Assets
                  </span>
                  <input
                    type="file"
                    id="file"
                    multiple
                    onChange={handleUpload}
                    className="sr-only"
                  />
                </div>
              </label>
            </div>
             {/* additional information */}
            <div className="mt-6">
    <h1 className="text-[18px] font-body font-normal">
    Additional Information
    </h1>
     <p className="mt-3 text-[#57595A]">Add any special requests or any additional information you might want to add</p>
    <textarea
      className={`border-[0.7px] mt-3 h-[120px] border-[#363939] rounded-lg w-full px-[19px] p-4 gap-2.5 focus:outline-none focus:border-[#384edd] `}
      name="addDescription"
      id="addDescription"
      placeholder="Write Additional information"
      value={formData.addDescription || ''}
      onChange={handleChange}
    />
    
  </div>



            {/* button */}
            <div className="flex  justify-end my-20">
          
              <div>
                <button  value='save' className="w-[150px] mr-2  py-3 text-white rounded-[10px] bg-[#0066FF] ">
                  Save
                </button>
               
                  <button
                    type="submit"
                    onClick={handleNext}
                    className="w-[150px] mr-2  py-3 text-white rounded-[10px] bg-[#0066FF] "
                  >
                    Next
                  </button>
                
              </div>
            </div>
          </form>
        </div>
      </div>

      <div>
      <CampaignSummary  className={` ${isModalVisible? "hidden" :"block"}`}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      />
     </div>
    </div>
    
    </>
  );
};

export default AddCampaign;
