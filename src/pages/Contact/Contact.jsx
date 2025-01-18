import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Section1 from "../../SectionPage/Contact/Section1";
import Section2 from "../../SectionPage/Contact/Section2";

export default function Contact() {
   return (
      <div>
         <Header />
         <Section1 />
         <Section2 />
         <Footer />
      </div>
   );
}
