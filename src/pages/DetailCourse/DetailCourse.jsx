import React, {useEffect} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DescriptionCourse from "../../SectionPage/DetailCourse/DescriptionCourse";
import SectionCourse from "../../SectionPage/DetailCourse/SectionCourse";
import useFetch from "../../../hooks/useFetch";
import {useParams} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
export default function DetailCourse() {
   const {data, fetchData, loding} = useFetch();
   const {courseName} = useParams();

   useEffect(() => {
      fetchData(`https://helsa-api.liara.run/courses/${courseName}/`);
   }, [courseName]);

   if (loding) return <Loader />;

   return (
      <div>
         <Header />
         <div className='container relative min-h-screen grid grid-cols-1 md:grid-cols-3 overflow-hidden'>
            {data.length > 0 ? (
               <div className='md:col-span-4 py-10'>
                  <DescriptionCourse courseInfo={data} />
                  <SectionCourse data={data} />
               </div>
            ) : (
               <div className='absolute inset-0 m-auto size-max text-red-500 text-xl'>دوره ای وجود ندارد...</div>
            )}
         </div>
         <Footer />
      </div>
   );
}
