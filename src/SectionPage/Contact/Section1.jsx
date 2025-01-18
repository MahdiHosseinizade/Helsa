import React from "react";
import {IoLocationOutline} from "react-icons/io5";
import {MdPhoneIphone} from "react-icons/md";
import {MdOutlineMail} from "react-icons/md";
export function ItemBox({title, text, icon, removeShadow}) {
   return (
      <div className={`bg-white ${removeShadow ? "" : "shadow-xl"} px-2 md:p-5 flex items-center md:items-start gap-5`}>
         <div className='bg-black text-white p-1.5 rounded-full text-xl w-max '>{icon}</div>
         <div className='text-right py-5 md:p-0'>
            <p className=' text-gray-500'>{title}</p>
            <p className='mt-2 text-sm md:text-base'>{text}</p>
         </div>
      </div>
   );
}

export default function Section1() {
   return (
      <>
         <div style={{backgroundImage: "url(/img/6.png)", paddingBottom: " 8vw"}} className='bg-cover bg-center '>
            <div className='container p-5  text-center md:pt-20'>
               <p className=' text-pink'>تماس با ما</p>
               <h1 className='mt-4 text-2xl lg:text-[85px] font-bold leading-tight md:w-2/3 mx-auto'>
                  با یک متخصص در تماس باشید
               </h1>

               {/* Box Contact Me */}

               <div className='grid md:grid-cols-2 gap-5 my-10'>
                  <ItemBox title='آدرس ما' text='یزد - پارک علم وفناوری اقبال' icon={<IoLocationOutline />} />
                  <a href='tel:09938453056'>
                     <ItemBox title='تلفن تماس' text='09938453056' icon={<MdPhoneIphone />} />
                  </a>
               </div>
            </div>
         </div>
      </>
   );
}
