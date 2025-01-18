import React from "react";
import {Link} from "react-router-dom";

export default function LastSection() {
   return (
      <div className='p-5 md:p-0 '>
         <div className='container text-white p-8 lg:p-0 bg-blueGray my-5 md:my-32 shadow-md rounded-xl relative'>
            <div className='lg:w-[40%] lg:absolute top-1/4 left-20'>
               <p className='text-2xl md:text-3xl'>خود را به آینده راه اندازی کنید.</p>
               <p className='text-lg my-5 text-gray-500'>
                  عصر جدیدی را با هلسا را تجربه کنید و برای شناخت بیشتر ما به صفحه درباره ما مراجعه کنید
               </p>
               <Link to='/about'>
                  <div className='px-7 py-4 mt-8 w-max bg-blue-gray-550 text-white mx-auto lg:mx-0'>اطلاعات بیشتر</div>
               </Link>
            </div>
            <img
               className='max-h-[450px]'
               src='https://layouts2.divi.support/virtual-courses/wp-content/uploads/sites/30/2023/09/virtual-courses-illustration-26@2x.png'
               alt=''
            />
         </div>
      </div>
   );
}
