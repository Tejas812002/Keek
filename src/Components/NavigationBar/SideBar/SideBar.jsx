import React, { createContext, useContext, useState } from 'react';
import { MoreVertical, AlignJustify, EllipsisVertical } from 'lucide-react';
import logo from "../../../Assets/Logo.jpg";
import white from "../../../Assets/white.jpg";
import profile from "../../../Assets/intersect.jpg";

export const SidebarContext = createContext();

const SideBar = ({ children }) => {
   const [expanded, setExpanded] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);



  return (
    <div>
      <aside className={`fixed h-screen max-w-[340px] z-10`}>
        <nav className={`h-full flex flex-col bg-white text-left border-r shadow-sm ${expanded ? "w-[315px]" : "w-20"}`}>
          <div className='p-4 pb-2 flex items-center'>
            <div className={`relative flex-shrink-0 overflow-hidden transition-all ${expanded ? "w-6" : "w-6"}`}>
              <img src={logo} className={'block w-full h-auto'} alt="Logo" />
              <img src={white} className='absolute inset-0 m-auto' style={{ height: '50%', width: '50%' }} alt="White Logo" />
            </div>
            <p className={`ml-2 font-bold overflow-hidden transition-all ${expanded ? "w-9" : "w-0"}`}>Keek</p>
            <button onClick={() => setExpanded(curr => !curr)} className='ml-auto rounded-lg bg-gray-50 hover:bg-gray-100'>
              {expanded ? <AlignJustify /> : <EllipsisVertical />}
            </button>
          </div>
          <SidebarContext.Provider value={{ expanded, selectedItem, setSelectedItem }}>
            <ul className='flex-1 px-3'>{children}</ul>
          </SidebarContext.Provider>

          <div className='border-t flex p-3'>
            <img src={profile} alt='' className={`w-10 h-10 rounded-md transition-all ${expanded ? "w-10 " : "w-0 ml-2"}`} />
            <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
              <div className='leading-4'>
                <h4 className='font-semibold '>John Doe</h4>
                <span className='text-xs text-gray-600'>johnDoe@gmail.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default SideBar;

export function SidebarItem({ icon, text, alert, children, customClass }) {
  const { expanded, selectedItem, setSelectedItem } = useContext(SidebarContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isSelected = selectedItem === text;

  const handleClick = () => {
    setSelectedItem(text);
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className='relative'>
      <li
        onClick={handleClick}
        className={`relative flex items-center py-1 px-2 font-medium rounded-md cursor-pointer transition-colors group 
          ${isSelected ? "bg-indigo-200 text-indigo-900" : "hover:bg-indigo-50 text-gray-600"} ${expanded ? "" : "h-10"} ${customClass}`}
        style={{ padding: expanded ? '0.25rem 0.5rem' : '0.25rem', width: expanded ? 'auto' : 'max-content' }}
      >
        <div className={`flex items-center ${expanded ? '' : 'p-0 m-0'}`}>
          {icon}
          <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 p-0 m-0"}`}>{text}</span>
          {alert && (
            <span className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}></span>
          )}
        </div>
        {!expanded && (
          <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
            {text}
          </div>
        )}
      </li>
      {dropdownOpen && expanded && (
        <ul className="pl-5">
          {children}
        </ul>
      )}
    </div>
  );
}
