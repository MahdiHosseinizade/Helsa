import React from "react";
import BoxTick from "../../components/BoxTick/BoxTick";
import ButtonHover from "../../components/BuutonHover/ButtonHover";
import {Link} from "react-router-dom";
import {Button} from "@material-tailwind/react";
export default function SaveSection() {
   return (
      <div className='bg-blueGray pb-10 lg:pb-40'>
         <div
            className=' p-10 md:p-28  bg-cover'
            style={{backgroundImage: "url(/img/BackSaveSectionService.jpg)", backgroundPosition: "center bottom"}}
         >
            <div className='flex  items-center justify-center text-white text-center'>
               <div className=''>
                  <p className='mb-4 md:mb-8 text-pink'>هوش مصنوعی</p>
                  <h1 className='text-2xl md:text-7xl font-bold'>خلاصه سازی متن</h1>
                  <p className='lg:w-1/2 lg:px-5 mx-auto mt-4 md:mt-6 text-sm md:text-lg text-gray-500 leading-8'>
                     از جمله خدمات شرکت هلسا امکان خلاصه سازی متن به صورت آنلاین می باشد ، کافیست متن مورد نظر خود را
                     تایپ یا کپی کرده تا در کمترین زمان ممکن خلاصه تهیه شده از آن توسط هوش مصنوعی هلسا را دریافت نمایید
                  </p>

                  <Link to='/service/summorize'>
                     <Button className='p-5 rounded-none bg-pink text-lg font-thin mt-5'>
                        خلاصه سازی را شروع کنید
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
         <div className='relative container text-white p-10 lg:p-0 mt-10'>
            <div className='lg:absolute left-0 lg:-translate-y-28 '>
               <img src='/img/service1.png' className='max-h-[800px]' alt='' />
            </div>
            <div className='lg:w-[59%] border border-pink -mt-5'>
               <div className='border-b border-pink p-3 text-pink'>سئو </div>
               <div className='lg:pl-28 lg:pr-14 py-20 p-5'>
                  <h2 className='text-2xl md:text-7xl text-[#3C5BFF] font-bold'>سئو سایت</h2>
                  <p className='my-5 mb-7 text-gray-400 leading-7'>
                     برای حصول بهترین نتایج در رشد کسب و کارتان، با خدمات حرفه ای سئو از مرحله طراحی سایت تا بازاریابی
                     دیجیتال در کنار شما خواهیم بود.
                  </p>

                  <BoxTick bg='bg-[#3C5BFF]' title='تدوین استراتژی سئو' />
                  <BoxTick bg='bg-[#3C5BFF]' title='آنالیز سئو وبسایت' />
                  <BoxTick bg='bg-[#3C5BFF]' title='مشاوره سئو' />

                  <Link to='/seo'>
                     <Button className='w-max p-4 px-8 bg-pink   mt-10  font-thin text-lg rounded-none'>
                        اطلاعات بیشتر
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
