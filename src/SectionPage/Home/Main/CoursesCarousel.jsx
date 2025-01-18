import React, {useEffect} from "react";
import Carousel from "../../../components/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import {LuTimer} from "react-icons/lu";
import {FaUsers} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {IoIosArrowBack} from "react-icons/io";
import useFetch from "../../../../hooks/useFetch";
import {Link} from "react-router-dom";

function ItemSlide(props) {
   return (
      <Link to={`/courses/${props.id}`}>
         <div className='p-2 pb-5 bg-[#19184F] rounded-xl'>
            <img className='rounded-xl min-h-60 md:min-h-40 object-cover' src={props.photo} alt='' />
            <div className='p-3 py-0 mt-2'>
               {/* <div className='bg-[#DFE9F4] text-primary mt-3 text-[11px] rounded-full w-max px-1.5 py-0.5 '>سطح پیشرفته </div> */}
               <p className=' my-4 md:text-sm'>{props.title}</p>
               <div className='flex gap-4 mt-3 items-center pb-3 border-b border-white/20'>
                  <div className='flex gap-2 items-center'>
                     <LuTimer className='text-lg' />
                     <span className='text-sm mt-1'>03 : 42 : 21</span>
                  </div>
                  <div className='flex gap-2 items-center'>
                     <FaUsers className='text-lg' />
                     <span className='text-sm mt-1'>{props.length}</span>
                  </div>
               </div>
               <div className='text-right mt-3 flex justify-between items-center'>
                  <div className='text-sm flex gap-1 items-center'>
                     <FaUser className='text-sm' />
                     <p className='mt-1 text-xs'> {props.instructor.slice(0, 15)}</p>
                  </div>
                  <p className='text-sm'>{props.price.toLocaleString()} ریال</p>
               </div>
            </div>
         </div>
      </Link>
   );
}

export default function CoursesCarousel() {
   const {data, fetchData} = useFetch();

   useEffect(() => {
      fetchData("https://helsa-api.liara.run/courses/");
   }, []);

   return (
      <div className='md:py-28 pt-28 relative md:px-5 lg:px-0 '>
         <div className='flex justify-between swiper'>
            <h3 className='mb-10  text-3xl text-center md:text-right md:text-4xl'>آخرین دوره ها</h3>
            <div className=' gap-2 flex '>
               <button className='prev size-10 md:size-14 rounded-full border-3 border-blue-gray-550 rotate-180 flex items-center justify-center text-xl md:text-2xl'>
                  <IoIosArrowBack />
               </button>
               <button className='next size-10 md:size-14 rounded-full border-3 border-blue-gray-550 flex items-center justify-center text-xl md:text-2xl'>
                  <IoIosArrowBack />
               </button>
            </div>
         </div>
         <Carousel spaceBetween={20}>
            {data?.map((item, index) => (
               <SwiperSlide key={index}>
                  <ItemSlide {...item} />
               </SwiperSlide>
            ))}
         </Carousel>
      </div>
   );
}
