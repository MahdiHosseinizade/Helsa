import React from "react";
import {Link} from "react-router-dom";

const arrItemLink = [
   {title: "هوش مصنوعی در معماری", path: "/courses/python"},
   {title: "یادگیری عمیق", path: "/courses/python"},
   {title: "یادگیری ماشین", path: "/courses/python"},
   {title: "برنامه نویسی پایتون", path: "/courses/python"},
   {title: "سلام دنیا!", path: "/courses/python"},
];

export default function LeftContainer() {
   return (
      <div>
         <div className='flex'>
            <button className='bg-gray-300 text-gray-700 text-sm p-2'>جستجو</button>
            <input type='text' className='p-2 outline-none border w-full' />
         </div>
         <div className='my-5 mt-8'>
            <h2 className='text-2xl mb-5'>نوشته‌های تازه</h2>
            {arrItemLink.map((item, index) => (
               <p key={index} className='my-3 text-sm text-gray-500'>
                  <Link to={item.path}>{item.title}</Link>
               </p>
            ))}
         </div>

         <h2 className='text-2xl mb-5'>
            آخرین دیدگاه ها
            <p className='mt-3 text-sm text-gray-500'>یک نویسنده دیدگاه وردپرس در سلام دنیا!</p>
         </h2>
      </div>
   );
}
