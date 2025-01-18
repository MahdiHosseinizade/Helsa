import React from "react";
import BoxTick from "../../components/BoxTick/BoxTick";

export default function ImgBox2() {
   return (
      <div className='p-7 md:p-0'>
         <div className='bg-[#01012c0d] max-w-screen-lg mx-auto  relative h-full mt-10 md:mt-36 p-5 md:px-16 lg:pb-28  pt-20'>
            <img
               className='block lg:absolute -left-[4.5%] -top-[14%] z-50'
               src='http://farascience.ir/wp-content/uploads/2024/06/AI-Illustrations_05.png'
               alt=''
            />
            <p className='text-pink mb-10'>فرایند پرداخت</p>
            <p className='text-2xl md:text-7xl font-bold'>منطق هوش مصنوعی</p>
            <p className='md:w-2/3 mt-5 text-gray-600'>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
               سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <div className='mt-10'></div>
            <BoxTick title='این یک عنصر سرگرم کننده است' />
            <BoxTick title='در علامت تجاری بدون آرایش' />
            <div className='px-7 py-4 mt-8 w-max bg-blueGray text-white'>اطلاعات بیشتر</div>
         </div>
      </div>
   );
}
