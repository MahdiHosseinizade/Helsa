import React from "react";
import ButtonHover from "../../components/BuutonHover/ButtonHover";
import {Link} from "react-router-dom";
export default function Summorize() {
   return (
      <div className='p-5 md:py-14 px-5  container text-white'>
         <div className=' bg-blue-gray-550 p-5 md:p-20 text-center '>
            <h2 className='text-2xl md:text-3xl lg:text-6xl mt-8 font-bold'>خلاصه سازی خودکار متن</h2>
            <p className=' text-gray-500 mt-8'>
               از جمله خدمات شرکت هلسا امکان خلاصه سازی متن به صورت آنلاین می باشد ، کافیست متن مورد نظر خود را تایپ یا
               کپی کرده تا در کمترین زمان ممکن خلاصه تهیه شده از آ« توسط هوش مصنوعی هلسا را دریافت نمایید
            </p>

            <Link to='/service/summorize'>
               <ButtonHover title='برای شروع خلاصه سازی کلیک کنید' />
            </Link>
         </div>
      </div>
   );
}
