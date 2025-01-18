import {Button} from "@material-tailwind/react";
import React from "react";
import {ItemBox} from "./Section1";
import {MdPhoneIphone} from "react-icons/md";
import {IoLocationOutline} from "react-icons/io5";
export default function Section2() {
   return (
      <div className='container p-5 md:p-0 flex flex-col-reverse md:grid items-center grid-cols-1 md:grid-cols-2 gap-10 my-20'>
         <div className=''>
            <h2 className='text-2xl md:text-6xl font-bold'>ارسال پیام</h2>
            <p className='text-lg leading-7 text-gray-500 mt-5'>
               در صورت وجود هرگونه سوال و یا ابهام میتوانید با ما در ارتباط باشید
            </p>
            <div className='mt-10 grid grid-cols-1 gap-5 text-center'>
               <ItemBox removeShadow title='آدرس ما' text='یزد - پارک علم وفناوری اقبال' icon={<IoLocationOutline />} />
               <a href='tel:09938453056'>
                  <ItemBox removeShadow title='تلفن تماس' text='09938453056' icon={<MdPhoneIphone />} />
               </a>
            </div>
         </div>
      </div>
   );
}
