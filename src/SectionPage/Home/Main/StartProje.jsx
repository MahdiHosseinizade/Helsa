import React from "react";
import ButtonHover from "../../../components/BuutonHover/ButtonHover";
export default function StartProje() {
   return (
      <div className='md:p-5 lg:p-0'>
         <div className='mt-20 bg-blue-gray-550 p-5 md:p-20 text-center '>
            <h2 className='text-2xl md:text-3xl lg:text-6xl mt-8 font-bold'>یک پروژه را شروع کنید</h2>
            <p className=' text-gray-500 mt-8'>
               ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
               سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>

            <ButtonHover title='برای مشاوره رایگان برنامه ریزی کنید' />
         </div>
      </div>
   );
}
