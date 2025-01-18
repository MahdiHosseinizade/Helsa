import React, {Children} from "react";
import BoxTick from "../BoxTick/BoxTick";

export default function ImgBox({title, text, removeBg, className, textBtn, desc, children}) {
   return (
      <div className='  relative'>
         <div className='max-w-screen-lg mx-auto relative'>
            <div className={`block mx-auto  lg:p-0  p-10 lg:absolute w-full lg:max-w-[57%]  ${className}`}>
               <div className=' border border-pink '>
                  <div className='p-4 text-pink font-bold border-b border-b-pink'>{text}</div>
                  <div className='p-5 lg:pr-[23%] lg:pl-14 py-14 md:py-24 bg-white'>
                     <p className='md:text-2xl text-xl lg:text-6xl font-bold'>{title}</p>
                     {desc}
                     {children}
                     {textBtn && <div className='px-7 py-4 mt-8 w-max bg-blueGray text-white'>{textBtn}</div>}
                  </div>
               </div>
            </div>
         </div>

         <div
            className='pb-14  bg-no-repeat back2 '
            style={{
               backgroundPosition: "center bottom",
               backgroundImage: !removeBg && "url(/img/homeBack1.jpg)",
            }}
         >
            <div className='max-w-screen-lg mx-auto z-50  md:p-0 p-10 mb-10 lg:-mb-20  py-0  '>
               <img src='/img/imgBox1.png' className='mx-auto lg:mx-0  z-50 lg:w-[55%] relative' alt='' />
            </div>
         </div>
      </div>
   );
}
