import React from "react";
import Header from "../../components/Header/Header";
import OurCourses from "../../SectionPage/AllCourses/OurCourses";
import Footer from "../../components/Footer/Footer";
import PopularCourses from "../../SectionPage/AllCourses/PopularCourses";
import LastSection from "../../SectionPage/AllCourses/LastSection";
import CategoryCourse from "../../SectionPage/AllCourses/CategoryCourse";
export default function Courses() {
   return (
      <>
         <Header />
         <OurCourses />
         <CategoryCourse />
         <PopularCourses />
         <LastSection />
         <Footer />
      </>
   );
}
