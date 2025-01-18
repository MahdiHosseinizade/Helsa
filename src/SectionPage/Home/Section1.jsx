import React from "react";
import {HiOutlineCheck} from "react-icons/hi2";
import ImgBox from "../../components/ImgBox/ImgBox";
import BoxTick from "../../components/BoxTick/BoxTick";
export default function Section1() {
   return (
      <ImgBox
         className='-mt-24 lg:left-0  lg:-translate-x-[30%] lg:-translate-y-[100px] xl:lg:-translate-y-[50px]  '
         text='فعالیت های جانبی'
      >
         <p className='mb-7 text-lg'>با هلسا، به دنیایی هوشمندتر و کارآمدتر خوش آمدید</p>
         <p className='text-gray-500 leading-8 '>
            علاوه بر تمرکز اصلی بر هوش مصنوعی، هلسا خدمات جانبی متنوعی از جمله طراحی سایت، پشتیبانی وبسایت، سئو و
            بهینه‌سازی موتورهای جستجو نیز ارائه می‌دهد. تیم متخصص ما در این زمینه‌ها با تجربه و دانش بالا، آماده است تا
            بهترین خدمات را به مشتریان ارائه کند و حضور آنلاین آنها را تقویت نماید.
         </p>
         <div className=' mt-5'>
            <BoxTick title='ترکیب تخصص و نوآوری' />
            <BoxTick title='هموارسازی مسیر موفقیت و پیشرفت' />
         </div>
      </ImgBox>
   );
}
