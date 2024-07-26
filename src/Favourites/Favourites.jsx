import React, { useContext, useState } from "react";
import { Mycontext } from "../utils/Context";
import { HiPlus } from "react-icons/hi";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";


const Card = ({ index, onClick, isActive }) => {
  return (
   <>
  <div
  onClick={() => onClick(index)}
  className={`relative rounded-lg border-2 border-gray-300 p-2 m-2 w-[250px] h-[150px] hover:border-blue-700 text-center cursor-pointer ${isActive ? 'bg-[#F4F5FF] border-blue-700' : 'bg-white'}`}
>
  <h3 className="text-lg font-bold text-start ml-2">
    Music
    <span className="text-gray-500 ml-2"><MoreVertIcon /></span>
  </h3>
  <p className="text-xs w-[69px] text-gray-500 mr-8 mt-2">List desc</p>
  <Link onClick={() => onClick(index)} to='/musicList'>
    <div className="absolute bottom-4 right-4">
      <button className="bg-none cursor-pointer text-white bg-blue-700 rounded-full p-2 text-lg">
        <IoIosArrowForward />
      </button>
    </div>
  </Link>
</div>

   
  
   </>
  );
};


const Favourites = () => {


  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const cards = Array(8).fill(null);

  



const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const currentPath = location.pathname;
  return (

    <div
      className={`flex relative top-[131px] ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[350px] w-[calc(100%-360px)]"
      }  overflow-y-auto  bg-[#F5F5F5] space-y-4`}
    >
      
      
      <div className={`${!expanded ? "w-full" : "w-[1065px]"}`}>
        <div className="flex items-center justify-between bg-white rounded-lg p-4 mb-6">
        <Link
    to="/viewFavourites"
    className={`font-body text-[16px] font-semibold ${
      currentPath === '/viewFavourites' ? 'text-blue-700' : 'text-black'
    }`}
  >
    Favourites
  </Link>

          <div className="flex space-x-4">
            <button className="flex items-center text-sm space-x-2 bg-purple-500 bg-gradient-to-r from-blue-600 to-pink-600  text-white px-4 py-2 rounded-md">
              <HiPlus /> <span>Create new</span>
            </button>
          </div>
        </div>


           <div>
        <div className='flex justify-between items-center mb-2 mr-10'>
        <h2 className="text-[18px] font-semibold ml-2 mb-2">Saved Lists</h2> 
        <a href="#" className='font-semibold text-blue-700'>view all</a> </div>
      
      </div>

      <div className="flex flex-wrap">
      {cards.map((_, index) => (
        <Card
          key={index}
          index={index}
          onClick={handleCardClick}
          isActive={index === activeIndex}
        />
      ))}
    </div>
      
      

      </div>


     </div>
  );
};

export default Favourites;
