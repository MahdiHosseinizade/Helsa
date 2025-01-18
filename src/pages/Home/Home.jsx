import React, {useEffect} from "react";
import Header from "../../components/Header/Header";
import LandingHome from "../../SectionPage/Home/LandingHome";
import Section1 from "../../SectionPage/Home/Section1";
import Footer from "../../components/Footer/Footer";
import Services from "../../SectionPage/Home/Services";
import Summorize from "../../SectionPage/Home/summorize";
import LastCourses from "../../SectionPage/Home/LastCourses";



export default function Home() {
   return (
      <>
         <Header />
         <LandingHome />
         <Section1 />
         <div className='bg-blueGray'>
            <Summorize />
            <div
               className='py-14 overflow-hidden  lg:pt-60  px-5 md:px-0 bg-no-repeat  back1 '
               style={{
                  backgroundPosition: "center top",
                  backgroundImage: "url(/img/homeBack2.jpg)",
               }}
            >
               <div className='container text-white'>
                  <LastCourses />
                  <Services />
               </div>
            </div>
            <Footer />
         </div>
      </>
   );
}
