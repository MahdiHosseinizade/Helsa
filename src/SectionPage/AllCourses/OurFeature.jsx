import React from "react";
import BoxTick from "../../components/BoxTick/BoxTick";
export default function OurFeature() {
   return (
      <div className='max-w-screen-md xl:max-w-screen-lg mx-auto relative p-7 md:p-10 lg:px-3.5 h-full'>
         <div className='block mx-auto lg:absolute  lg:w-[73%] -translate-y-20 md:-translate-y-24 h-max left-0 border border-pink z-50'>
            <div className='border-b border-pink p-4 text-sm text-pink'>پایگاه داده</div>
            <div className='lg:pr-[25%] text-black lg:pt-28 lg:pe-24 p-5 '>
               <p className='font-bold text-2xl md:text-7xl'>ویژگی ما</p>
               <p className='my-7 leading-7 text-gray-600'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                  متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
               </p>
               <BoxTick title='این یک عنصر سرگرم کننده است' />
               <BoxTick title='در علامت تجاری بدون آرایش' />
               <div className='px-7 py-4 mt-8 w-max bg-blueGray text-white'>اطلاعات بیشتر</div>
            </div>
         </div>
         <img
            className=' w-full mx-auto xl:h-[580px] xl:w-max  lg:mx-0 relative z-50  md:mt-20  lg:mt-0'
            src='http://farascience.ir/wp-content/uploads/2024/06/AI-Illustrations_06.png'
            alt=''
         />
      </div>
   );
}
