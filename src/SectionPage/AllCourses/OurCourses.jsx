import React from "react";
import BoxServices from "../../components/BoxServices/BoxServices";
export default function OurCourses() {
   return (
      <div className='bg-blueGray h bg-cover p-5 md:p-20' style={{backgroundImage: "url(/img/coursesBack.jpg)"}}>
         <div className='relative text-white'>
            <div className=' w-full p-5 h-full z-50 top-0 flex justify-center items-center'>
               <div className='text-center'>
                  <p className='text-pink block'>خدمات ما</p>
                  <p className='text-3xl md:text-7xl mt-8 font-bold'>دوره های آموزشی ما</p>
                  <p className='mt-8 leading-8 mx-auto '>
                     از دیگر خدمات شرکت هلسا می توان به ارائه دوره هایی کامل و جامع اشاره کرد که در قسمت زیر آن هارا
                     میتوان دید
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
