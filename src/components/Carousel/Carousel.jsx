import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Navigation} from "swiper/modules";

export default function Carousel({children, spaceBetween}) {
   return (
      <Swiper
         slidesPerView={1}
         spaceBetween={spaceBetween}
         grabCursor
         rewind
         navigation={{
            nextEl: ".next",
            prevEl: ".prev",
         }}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
         }}
         breakpoints={{
            640: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 4,
            },
         }}
         modules={[Navigation, Autoplay]}
         className='swiper'
      >
         {children}
      </Swiper>
   );
}
