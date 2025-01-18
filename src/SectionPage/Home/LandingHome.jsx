import React from "react";
import ButtonHover from "../../components/BuutonHover/ButtonHover";

export default function LandingHome() {
   return (
      <div className='text-white  bg-blueGray pb-20 lg:pb-0 text-center md:text-right'>
         <div className='p-10   lg:px-0  lg:container py-7 md:py-20  md:grid grid-cols-7 flex-col-reverse flex gap-x-10  2xl:gap-x-14 '>
            <div className='md:col-span-3'>
               <img src='/img/homeHead.jpg' alt='' />
            </div>
            <div className='md:col-span-4 py-10'>
            <h1>
  <span className="text-3xl font-bold">
    <span style={{ color: "#ff00ff" }}>هلسا</span>{" "}
    <span style={{ color: "#ffffff" }}>(هوش لازم سروران ایساتیس)</span>
  </span>
</h1>




               <p className=' text-gray-500  text-[13px] md:text-lg md:leading-8 leading-6 my-20'>
                  شرکت هلسا با افتخار در زمینه توسعه و آموزش هوش مصنوعی فعالیت می‌کند و به عنوان یکی از پیشگامان این
                  عرصه، هدف خود را بر ارتقاء دانش و مهارت‌های پزشکان، معماران و صنعت‌گران در استفاده از فناوری‌های هوش
                  مصنوعی قرار داده است. ما در هلسا معتقدیم که هوش مصنوعی می‌تواند به طور چشمگیری کیفیت و کارآیی در
                  حوزه‌های مختلف را بهبود بخشد و به همین دلیل، تلاش می‌کنیم تا ابزارها و راهکارهای کاربردی و مبتکرانه‌ای
                  را در اختیار متخصصان قرار دهیم.
               </p>
            </div>
         </div>
      </div>
   );
}
