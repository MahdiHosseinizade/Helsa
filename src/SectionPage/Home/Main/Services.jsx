import React from "react";
import BoxItem from "../../../components/BoxItem/BoxItem";
const arrBox = [
   {title: "تحقیق و توسعه", image: "/img/icon (5).png"},
   {title: "تراشه های کامپیوتر", image: "/img/icon (4).png"},
   {title: "فراگیری ماشین", image: "/img/icon (7).png"},
   {title: "خودکارسازی فرایند", image: "/img/icon (6).png"},
];
export default function Services() {
   return (
      <div className='text-white text-center md:text-right md:p-5 lg:p-0'>
         <p className='text-pink '>خدمات ما</p>
         <h1 className='text-2xl lg:text-6xl mt-8 font-bold'>چیزی که ما پیشنهاد میدیم.</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-5'>
            {arrBox.map((item) => (
               <BoxItem key={item.image} {...item} />
            ))}
         </div>
      </div>
   );
}
