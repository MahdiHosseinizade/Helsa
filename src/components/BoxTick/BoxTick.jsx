import React from "react";
import {GrCheckmark} from "react-icons/gr";
export default function BoxTick({title, bg}) {
   return (
      <div className='flex items-center  gap-4 mt-5 '>
         <div className={`p-2 rounded-full ${bg ? bg : "bg-black"} text-white font-bold`}>
            <GrCheckmark />
         </div>
         <p className='md:text-lg '>{title}</p>
      </div>
   );
}
