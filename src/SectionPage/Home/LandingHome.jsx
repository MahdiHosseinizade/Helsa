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

            <h3 style={{ color: "#ff00ff" }} className="pt-3 text-2xl">
               مجری دوره های آموزشی دانشگاه علم و صنعت
            </h3>


               <p className=' text-gray-500  text-[13px] md:text-lg md:leading-8 leading-6 my-14'>
شرکت *هلسا* به‌عنوان تنها مجری رسمی دوره‌های هوش مصنوعی دانشگاه علم و صنعت ایران، با افتخار در عرصه آموزش و مشاوره تخصصی فعالیت می‌کند. این شرکت علاوه بر همکاری با *دانشگاه علوم پزشکی شهید صدوقی یزد* به‌عنوان مشاور علمی در حوزه علوم پزشکی، و *دپارتمان هوش مصنوعی خانه صمت استان یزد* در زمینه توسعه فناوری‌های هوشمند، به‌عنوان *مدرس کانون وکلای دادگستری و کارشناسان بانک ملی ایران* نیز شناخته می‌شود. هلسا با رویکردی چند‌بعدی، در چهار شاخه‌ تخصصی شامل *پزشکی، طراحی و معماری، تحقیق و پژوهش، و آموزش کودکان* به تدریس و ارائه خدمات مشاوره‌ای مشغول است و رسالت خود را در گسترش دانش هوش مصنوعی و توانمندسازی نسل‌های آینده درک و به‌کارگیری فناوری‌های نوین می‌داند.               </p>
            </div>
         </div>
      </div>
   );
}
