import React from "react";
import ImgBox from "../../components/ImgBox/ImgBox";
import BoxTick from "../../components/BoxTick/BoxTick";
import {Link} from "react-router-dom";
export default function WebsitDesign() {
   return (
      <div>
         <ImgBox
            title='طراحی سایت'
            textBtn={<Link to='/websitedesign'>مشاهده پلن ها</Link>}
            text='طراحی سایت'
            className='-mt-24 md:-mt-20 lg:left-0   lg:translate-x-[3px] lg:translate-y-[20px]  '
            removeBg
            desc={
               <div className='mt-5 grid gap-5'>
                  <p>با طراحی سایت حرفه‌ای کسب و کار خود را رشد دهید!</p>
                  <p>سفارش طراحی سایت و توسعه انواع پلتفرم متناسب با نیاز شما</p>
               </div>
            }
         >
            <div className=' mt-5'>
               <BoxTick title='شروع طراحی سایت با بالاترین کیفیت در کوتاه ترین زمان ممکن' />
               <BoxTick title='دریافت مشاوره رایگان و ثبت سفارش طراحی وب' />
            </div>
         </ImgBox>
      </div>
   );
}
