import React from "react";
import {Menu, MenuHandler, MenuList} from "@material-tailwind/react";
import {IoIosArrowDown} from "react-icons/io";

export function MenuCustomList({className, handeler, children, offset}) {
   const [openMenu, setOpenMenu] = React.useState(false);

   return (
      <Menu placement='bottom-end' open={openMenu} handler={setOpenMenu} allowHover offset={offset}>
         <MenuHandler>
            <button
               variant='text'
               className={`${className} flex items-center gap-1 outline-none text-base font-normal capitalize tracking-normal`}
            >
               {handeler}
               <IoIosArrowDown
                  strokeWidth={2.5}
                  className={` ${className} h-3.5 w-3.5 transition-transform text-gray-600 ${
                     openMenu ? "rotate-180" : ""
                  }`}
               />
            </button>
         </MenuHandler>
         <MenuList className='hidden border-t-[3px] border-t-pink max-w-[250px] w-full   rounded-none p-5 overflow-visible lg:grid text-right'>
            {children}
         </MenuList>
      </Menu>
   );
}
