import React from "react";
import Header from "../../components/Header/Header";
import SaveSection from "../../SectionPage/Service/SaveSection";
import Footer from "../../components/Footer/Footer";
import WebsitDesign from "../../SectionPage/Service/WebsitDesign";
import OurSuggestion from "../../SectionPage/Service/OurSuggestion";
export default function Service() {
   return (
      <>
         <Header />
         <SaveSection />
         <WebsitDesign />
         <OurSuggestion />
         <Footer />
      </>
   );
}
