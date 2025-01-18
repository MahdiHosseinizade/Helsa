import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function WebsiteDesign() {
   return (
      <div>
         <Header />
         <div className='p-5 md:p-10'>
            <div className='container  overflow-hidden h1Template p-5 md:p-10   border border-pink  my-10'>
               <div className='text-center text-2xl'>
                  <h1 className='text-pink !text-4xl'>طراحی سایت </h1>
                  <h2 className='left-10 mt-3'>
                     با طراحی سایت حرفه‌ای کسب و کار خود را رشد دهید!
                     <p className='my-3' />
                     سفارش طراحی سایت و توسعه انواع پلتفرم متناسب با نیاز شما
                  </h2>
               </div>
               <div className='h1Template'>
                  <div className='!text-pink'>ساخت سایت تخصصی در شرکت هلسا</div>
                  <ul className='border-b border-pink p-5'>
                     <li>دریافت مشاوره رایگان و ثبت سفارش طراحی وب</li>
                     <li>نیاز سنجی با توجه به اهداف کسب و کار</li>
                     <li>شروع طراحی سایت با بالاترین کیفیت در کوتاه ترین زمان ممکن</li>
                     <li>ارائه طرح اولیه و تایید کارفرما</li>
                  </ul>
                  <div className='!text-pink'>خدمات طراحی سایت با شرکت هلسا</div>
                  <ul className='border-b border-pink p-5'>
                     <li>طراحی سایت اختصاصی</li>
                     <li>طراحی سایت با وردپرس</li>
                     <li>طراحی سایت با جوملا</li>
                     <li>طراحی سایت با قالب آماده</li>
                  </ul>
                  <div className='!text-pink'>انواع طراحی سایت</div>
                  <ul className='border-b border-pink p-5'>
                     <li>طراحی سایت فروشگاهی</li>
                     <li>طراحی سایت شرکتی</li>
                     <li>طراحی سایت اختصاصی</li>
                     <li>طراحی سایت شخصی</li>
                     <li>طراحی سایت وردپرس</li>
                  </ul>
                  <div className='!text-pink'>تاثیر طراحی سایت در کسب و کار و افزایش فروش</div>
                  <p>فعالیت 24 ساعته</p>
                  <p>
                     یک سایت اگر به درستی طراحی شود، می‌تواند در ۲۴ ساعت شبانه روز و ۷ روز هفته (تمام طول سال) فعال باشد
                     تا شما را به درآمد عالی برساند.
                  </p>
                  <div>فروش آنلاین سایت</div>
                  <p>
                     بدون دخالت حتی یک نیروی فروش، به سادگی می‌توانید با داشتن یک سایت مناسب به فروش برسید و درآمدتان را
                     چند برابر کنید.
                  </p>
                  <div>طراحی مطابق سلیقه شما</div>
                  <p>
                     اگر دکوراسیون محل کار شما، مطابق سلیقتان نباشد، هزینه زیادی را بابت تغییر دکور باید پرداخت کنید اما
                     وبسایت به سادگی قابل تغییر است.
                  </p>
                  <div>راحتی مشتریان سایت</div>
                  <p>
                     کاربران و مشتریان شما به سادگی می‌توانند به تمامی محصولات شما دسترسی داشته باشند و همین موضوع باعث
                     افزایش نرخ فروش خواهد شد.
                  </p>
                  <div>تبلیغات اینترنتی</div>
                  <p>
                     با اجرای اصولی سئو و بهینه سازی سایت به مخاطب میلیونی خواهید رسید که همین امر نیز باعث افزایش فروش
                     خواهد شد.
                  </p>
                  <div>تبلیغات آفلاین</div>
                  <p>
                     به راحتی می‌توانید سایت خود را برای تبلیغ آماده کنید تا کاربران بیشتری با شما آشنا شوند و به درآمد
                     برسید.
                  </p>
               </div>
            </div>
         </div>

         <Footer />
      </div>
   );
}
