import React from 'react';
import SearchIcon from '../../../Assets/SearchIcon.png';
import Bellicon from '../../../Assets/bell.png';
import messageIcon from '../../../Assets/message-outline.png';
import trophyIcon from '../../../Assets/trophy.png';
// import { IoMdNotificationsOutline } from 'react-icons/io';
// import { MdChatBubbleOutline } from "react-icons/md";
// import { RiTrophyLine } from 'react-icons/ri';
// import styled from 'styled-components';
// import { TextField, IconButton } from '@mui/material';


const NavBar = () => {
  return (

    <div className="fixed z-10 top-0 left-[310px] w-[calc(100%-315px)] bg-white h-24 flex items-center justify-between bg-background  px-4">
  
    <div className="relative flex items-center w-8/12"> 
      <img src={SearchIcon} alt="magnifier" className="absolute left-2 top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search"
        className="w-full h-11  pl-10 py-1 rounded bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
 
  <div className="flex items-center  w-44 h-8 pr-4 justify-between space-x-2"> 
    {/* Add onclick for adding functions */}
    <img src={messageIcon} alt="messages" className="w-6 h-6" />
    <img src={trophyIcon} alt="bell" className="w-8 h-8" />
    <img src={Bellicon} alt="notification" className="w-8 h-8" />
  </div>
</div>

  );
};

export default NavBar;
//  <NavBarContainer>
// <SearchContainer>
//   <StyledTextField
//     variant="outlined"
//     placeholder="Search"
//     InputProps={{ disableUnderline: true }}
//   />
//   <SearchIconWrapper>
//     <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <g id="Group">
//         <path id="Vector" d="M8.48226 16.4645C12.6146 16.4645 15.9645 13.1146 15.9645 8.98226C15.9645 4.84992 12.6146 1.5 8.48226 1.5C4.34992 1.5 1 4.84992 1 8.98226C1 13.1146 4.34992 16.4645 8.48226 16.4645Z" stroke="#9898A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//         <path id="Vector_2" d="M13.6851 14.5742L16.6184 17.5" stroke="#9898A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//       </g>
//     </svg>
//   </SearchIconWrapper>
// </SearchContainer>
// <IconsContainer>
//   <IconButton>
//     <MdChatBubbleOutline size={26} />
//   </IconButton>
//   <IconButton>
//     <RiTrophyLine size={30} />
//   </IconButton>
//   <IconButton>
//     <IoMdNotificationsOutline size={30} />
//   </IconButton>
// </IconsContainer>
// </NavBarContainer> 