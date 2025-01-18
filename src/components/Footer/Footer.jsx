import React from "react";
import {MdOutlineRssFeed} from "react-icons/md";
import {FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Footer() {
   return (
      <div className='bg-blueGray text-white pt-10'>
         <div className='border-pink border'>
            <div className='md:grid md:grid-cols-4 container px-10  py-20 items-center '>
               <div className='col-span-2 md:hidden mb-10'>
                  <img src='/img/logo.png' className='w-10 mx-auto' alt='Logo of Helsa' />
               </div>
               <div className='flex flex-col-reverse md:flex-row gap-y-10 gap-20  md:col-span-2'>
                  <div>
                     <p className='my-4 text-gray-500'>تماس با ما</p>
                     {/* <p className='my-4'>info@diviai.com</p> */}
                     <p className='my-4'>09938453056</p>
                     <p className='my-4'>یزد - پارک علم وفناوری اقبال</p>
                  </div>
                  <div>
                     <p className='my-4 text-gray-500'>شرکت ما</p>
                     <Link className='my-4 block' to='/'>
                        صفحه اصلی
                     </Link>
                     <Link className='my-4 block' to='/contact'>
                        تماس با ما
                     </Link>
                     <Link className='my-4 block' to='/service'>
                        خدمات ما
                     </Link>
                  </div>
               </div>

               <div className='col-span-2 md:block hidden'>
                  <img src='/img/logo.png' className='w-20 rounded-md mx-auto' alt='Logo of Helsa' />
               </div>
            </div>
         </div>

         <div className="bg-[#191919] p-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-gray-400">
               <div className="text-center md:text-left text-sm font-medium flex items-center gap-2">
                  <span>توسعه داده شده با</span>
                  <span className="text-purple-600 text-lg">💜</span>
                  <span>در هلسا</span>
               </div>
               <div className="text-xs text-gray-500 text-center md:text-right">
                  &copy; {new Date().getFullYear()} All rights reserved
               </div>
            </div>
         </div>
      </div>
   );
}
