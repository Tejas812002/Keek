import React, { useContext, useState } from "react";
import { Mycontext } from "../utils/Context";
import { MdChevronRight } from "react-icons/md";
import logo from "../Assets/intersect.jpg"
import { FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const tableData = [
  {name: "Media Analyst",imageUrl: logo,category: "Travel, Tourism, Fashion",workSuccessRatio: "90%",},
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
  {name: "Media Analyst",imageUrl: logo, category: "Travel, Tourism, Fashion",workSuccessRatio: "90%", },
];




  


const MusicList = () => {

const [currentPage, setCurrentPage] = useState(1);

const [favorites, setFavorites] = useState(Array(tableData.length).fill(false));
const recordsPerPage = 7;

const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;
const records = tableData.slice(firstIndex, lastIndex);
const npage = Math.ceil(tableData.length / recordsPerPage);
const numbers = [...Array(npage + 1).keys()].slice(1);



const prePage = () => {
  if (currentPage !== 1) {
    setCurrentPage(currentPage - 1);
  }
};

const changePage = (id) => {
  setCurrentPage(id);
};

const nextPage = () => {
  if (currentPage !== npage) {
    setCurrentPage(currentPage + 1);
  }
};
 
const toggleFavorite = (index) => {
  const newFavorites = [...favorites];
  newFavorites[index] = !newFavorites[index];
  setFavorites(newFavorites);
};

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
      <div className="bg-white top-28 my-4 h-[766px]  w-full rounded-xl">
        <div className=" border-b">
        <div className="flex flex-row p-6 items-center gap-[3.14px]">
  <Link
    to="/viewFavourites"
    className={`text-[16px] font-normal flex flex-row ${
      currentPath === '/viewFavourites' ? 'text-blue-700' : 'text-black'
    }`}
  >
    Saved List
    <MdChevronRight className="m-1 items-center" size={"15.7px"} />
  </Link>
  <Link
    to="/musicList"
    className={`text-[16px] font-semibold ${
      currentPath === '/musicList' ? 'text-[#2463eb]' : 'text-black'
    } gap-x-2`}
  >
    Music
  </Link>
</div>


          <div>
            <table className="min-w-full h-[75px]  bg-white border border-gray-200 ">
              <thead>
                <tr className="h-[75px] text-sm">
                  <th className="py-2 px-4 border-b text-start">Influencer Name</th>
                  <th className="py-2 px-4 border-b text-start">Category</th>
                  <th className="py-2 px-4 border-b text-start">Work Success Ratio</th>
                 
                </tr>
              </thead>
              <tbody>
                {records.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b text-lg flex items-center h-[75px] ">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <a href="#" className="text-blue-500">
                        {item.name}
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b">{item.category}</td>
                    <td className="py-2 px-4 border-b text-green-500">
                      {item.workSuccessRatio}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <span className="cursor-pointer text-2xl"
                        onClick={() => toggleFavorite(firstIndex + index)}>
                          {favorites[firstIndex + index] ? <FaHeart className="text-red-500" /> : <FaHeart className="text-gray-300" />}
                        {/* <FaHeart className="text-[#FF424C] text-2xl"/> */}
                        </span>
                      
                    </td>
                    <td className="py-2 px-5 border-b">
                    <Link to={"/viewProfile"}>
                    <button className="bg-blue-500 text-[14px] text-white py-3 px-6 p-5 rounded-md bg-gradient-to-r from-[#1E3BDD] to-[#1D9ED5]">
                        View Profile
                      </button>
                    </Link>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <nav className="  bottom-0 left-0 right-0 flex justify-center my-4 mt-8 mb-4 ">
              <ul className="pagination flex space-x-2">
                <li className="page-item">
                  <button onClick={prePage} className="page-link py-1 px-3  text-gray-400 ">
                    Prev
                  </button>
                </li>
                {numbers.map((n, i) => (
                  <li key={i} className={`page-item ${currentPage === n ? "active" : ""}`}>
                    <button
                      onClick={() => changePage(n)}
                      className={`page-link py-1 px-3 rounded ${currentPage === n ? " text-black font-bold" : "text-gray-500"}`}
                    >
                      {n}
                    </button>
                  </li>
                ))}
                <li className="page-item">
                  <button onClick={nextPage} className="page-link py-1 px-3  text-black font-semibold ">
                    Next
                  </button>
                </li>
              </ul>
            </nav>

           
          </div>
        </div>
      </div>
    </div>
    );
   
};

export default MusicList;
