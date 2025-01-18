import React, {useEffect, useState} from "react";
import {BiCategory} from "react-icons/bi";
import {PiPaintBrushBroad} from "react-icons/pi";
import { MdOutlinePlayLesson } from "react-icons/md";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";
import BoxCourse from "../../components/BoxCourse/BoxCourse";
export default function CategoryCourse() {
   const [groupedCourses, setGroupedCourses] = useState({});
   const [categoryUser, setCategoryUser] = useState(null);
   const {data, fetchData} = useFetch();

   useEffect(() => {
      fetchData("https://helsa-api.liara.run/courses/");
   }, []);

   useEffect(() => {
      const groupByCategory = (courses) => {
         return courses.reduce((acc, course) => {
            const categories = course.categories.length ? course.categories : ["بدون دسته"];

            categories.forEach((category) => {
               if (!acc[category]) {
                  acc[category] = [];
               }
               acc[category].push(course);
            });

            return acc;
         }, {});
      };

      setGroupedCourses(groupByCategory(data));
   }, [data]);

   return (
      <>
         {/* All Category  */}
         <div className=' mt-20  pb-20   relative bg-cover' style={{backgroundImage: "url('/img/6.png')"}}>
            <div className='container'>
               <div className='text-2xl md:text-4xl pb-3  mb-16 flex items-center gap-3 p-5'>
                  <BiCategory />
                  <p>دسته بندی دوره ها</p>
               </div>
               <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-10  p-5 lg:p-0'>
                  {data != "" ? (
                     Object.keys(groupedCourses).map((item) => (
                        <div
                           key={item}
                           onClick={() => setCategoryUser({title: item, items: groupedCourses[item]})}
                           className={`${
                              categoryUser?.title == item ? "bg-blue-gray-550 text-white" : "bg-white"
                           } cursor-pointer rounded-3xl p-10 text-center border border-gray-400/60    transition-colors hover:bg-blue-gray-550 hover:text-white`}
                        >
                           <MdOutlinePlayLesson className='text-5xl mx-auto' />
                           <p className='mt-5 text-2xl'>{item}</p>
                           <p className='mt-2 text-sm'>{groupedCourses[item].length} دوره</p>
                        </div>
                     ))
                  ) : (
                     <Loader />
                  )}
               </div>
            </div>
         </div>

         {/* category User Container  */}

         {categoryUser && (
            <div className='container my-20 md:mb-40'>
               <p className='text-2xl md:text-4xl mb-5 px-5'>دسته بندی انتخابی شما</p>
               <div className=' pb-3 text-gray-500  text-xl md:text-2xl  mb-16 flex items-center gap-3 '>
                  {/* <AiOutlineProduct /> */}
                  <p className='px-5'> {categoryUser.title}</p>
               </div>
               <div className=' grid grid-cols-1 md:grid-cols-3 gap-10 p-5 md:p-0'>
                  {categoryUser.items.map((item) => (
                     <BoxCourse {...item} />
                  ))}
               </div>
            </div>
         )}
      </>
   );
}
