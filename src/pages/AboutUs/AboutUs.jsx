import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AboutHelsa from "../../SectionPage/AboutUs/AboutHelsa";
import AboutJob from "../../SectionPage/AboutUs/About-Job";
import PerconHelsa from "../../SectionPage/AboutUs/PerconHelsa";

export default function AboutUs() {
   return (
      <>
         <Header />
         <AboutHelsa />
         <AboutJob />
         <PerconHelsa />
         <Footer />
      </>
   );
}
