import React from "react";
import Services from "./Main/Services";
import StartProje from "./Main/StartProje";
import CoursesCarousel from "./Main/CoursesCarousel";
export default function Main() {
   return (
      <div
         className='pt-14 overflow-hidden  lg:pt-60  px-5 md:px-0 bg-no-repeat bg-[#030929] back1 '
         style={{
            backgroundPosition: "center top",
            backgroundImage: "url(/img/homeBack2.jpg)",
         }}
      >
         <div className='center-container text-white'>
            <Services />
            <CoursesCarousel />
            <StartProje />
         </div>
      </div>
   );
}
