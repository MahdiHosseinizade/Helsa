import React from "react";
import BoxServices from "../../components/BoxServices/BoxServices";

const arrBox = [
   {
      title: "دوره های آموزشی",
      image: "/img/icon (7).png",
      desc: "برگزاری دوره های آموزشی هوش مصنوعی ، مناسب برای همه علاقه مندان بدون نیاز به پیش زمینه برنامه نویسی",
   },
   {title: "پشتیبانی وبسایت", image: "/img/icon (1).png", desc: "ارائه خدمات پشتیبانی و نگهداری و وبمستری سایت"},
   {title: "سئو", image: "/img/icon (2).png", desc: "گام به گام با شما تا رسیدن به رتبه 1 نتایج گوگل"},
   {
      title: "تولید محتوا",
      image: "/img/icon (5).png",
      desc: "تولید محتوای کسب‌وکار خود را به ما بسپارید و سرعت، دقت و کیفیت را در کنارهم تجربه کنید.",
   },
   {
      title: "طراحی وبسایت",
      image: "/img/icon (3).png",
      desc: "خلاقیت و تجربه در طراحی سایت اختصاصی با جدیدترین متدها و تکنولوژی روز",
   },
   {title: "خلاصه سازی متن", image: "/img/icon (6).png", desc: "خلاصه سازی آنلاین متن با هوش مصنوعی"},
];

export default function OurSuggestion() {
   return (
      <div className='bg-[#EDEDED] -mt-10 p-8 md:pb-16 '>
         <div className='pt-28 pb-16 container'>
            <p className='text-pink'>امکانات</p>
            <h2 className='text-2xl md:text-6xl font-bold  mt-5'>چیزی که ما پیشنهاد میدیم</h2>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3 mt-14'>
               {arrBox.map((item) => (
                  <BoxServices {...item} />
               ))}
            </div>
         </div>
      </div>
   );
}
