import React from "react";

function ItemBoxJob({title, desc}) {
   return (
      <div className='p-5 md:p-10 border-b border-gray-600 md:flex justify-between items-center text-center md:text-right'>
         <div className='text-2xl md:text-6xl font-bold '>{title}</div>
         <div className='md:w-1/2 text-gray-500 mt-5 md:mt-0'>{desc}</div>
      </div>
   );
}

export default function AboutJob() {
   return (
      <div className='container my-10 p-5'>
         <ItemBoxJob
            title='رویکرد ما'
            desc='رویکرد شرکت هلسا بر آموزش و توانمندسازی متخصصان، نوآوری در هوش مصنوعی و ارائه خدمات مکمل استوار است. ما با آموزش پزشکان، معماران و صنعت‌گران، آنها را برای استفاده مستقل از هوش مصنوعی آماده می‌کنیم و ابزارهای کاربردی و نوآورانه‌ای توسعه می‌دهیم. همچنین، با خدماتی مانند طراحی و پشتیبانی وبسایت و بهینه‌سازی موتورهای جستجو (SEO)، حضور دیجیتالی مشتریان را تقویت می‌کنیم. هدف ما ارتقاء دانش، کارآیی و موفقیت مشتریان در حوزه‌های مختلف است.'
         />
         <ItemBoxJob
            title='ماموریت ما'
            desc='ماموریت شرکت هلسا توانمندسازی متخصصان از طریق آموزش و توسعه فناوری‌های هوش مصنوعی است تا به آنها در بهبود عملکرد و کارآیی در حوزه‌های پزشکی، معماری و صنعت کمک کند. ما با ارائه دوره‌های آموزشی، کارگاه‌های عملی و ابزارهای نوآورانه، تلاش می‌کنیم دانش و مهارت‌های کاربران را ارتقا دهیم.'
         />
         <ItemBoxJob
            title='چشم انداز ما'
            desc='چشم‌انداز شرکت هلسا ایجاد بستری جامع و نوآورانه است که در آن هوش مصنوعی به ابزاری کلیدی برای بهبود و ارتقاء کارآیی در حوزه‌های پزشکی، معماری و صنعت تبدیل شود. ما می‌خواهیم با ارائه آموزش‌های تخصصی و توسعه ابزارهای کاربردی، به متخصصان کمک کنیم تا به طور مستقل و خلاقانه از این فناوری بهره‌مند شوند. هدف نهایی ما ایجاد دنیایی هوشمندتر و کارآمدتر است که در آن تکنولوژی هوش مصنوعی به بهبود زندگی و کسب‌وکارها کمک می‌کند.'
         />
      </div>
   );
}
