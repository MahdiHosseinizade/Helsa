import React from "react";
import BoxServices from "../../components/BoxServices/BoxServices";
const arrBox = [
   {
      title: "طراحی وبسایت",
      image: "/img/icon (5).png",
      desc: "خلاقیت و تجربه در طراحی سایت اختصاصی با جدیدترین متدها و تکنولوژی روز",
   },
   {title: "سئو", image: "/img/icon (4).png", desc: "گام به گام با شما تا رسیدن به رتبه 1 نتایج گوگل"},
   {
      title: "تولید محتوا",
      image: "/img/icon (7).png",
      desc: "تولید محتوای کسب‌وکار خود را به ما بسپارید و سرعت، دقت و کیفیت را در کنارهم تجربه کنید.",
   },
   {title: "پشتیبانی وبسایت", image: "/img/icon (6).png", desc: "ارائه خدمات پشتیبانی و نگهداری و وبمستری سایت"},
];
export default function Services() {
   return (
      <div className='text-white text-center md:text-right md:p-5 lg:p-0'>
         <h1 className='text-2xl lg:text-6xl mt-8 font-bold'>خدمات پیشنهادی ما</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-5'>
            {arrBox.map((item) => (
               <BoxServices key={item.image} {...item} />
            ))}
         </div>
      </div>
   );
}
