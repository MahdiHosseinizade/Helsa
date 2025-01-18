import React, {useEffect} from "react";
import useFetch from "../../../hooks/useFetch";
import BoxCourse from "../../components/BoxCourse/BoxCourse";
import {SkeletonCustom} from "../../components/Skeleton/Skeleton";

export default function PopularCourses() {
   const {data, fetchData} = useFetch();

   useEffect(() => {
      fetchData("https://helsa-api.liara.run/courses/");
   }, []);

   return (
      <div className='container mt-10 relative '>
         <div className='text-2xl md:text-4xl mb-20 flex items-center gap-3 p-5'>
            <div className='size-6 bg-blue-gray-550 rounded'></div>
            <p>پر طرفدار ترین دوره ها</p>
         </div>
         <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 p-5 md:p-0'>
            {/* Box Container Course */}

            {data != "" ? (
               data.map((item) => <BoxCourse key={item.id} {...item} />)
            ) : (
               <>
                  <SkeletonCustom className='h-60 w-full' />
                  <SkeletonCustom className='h-60 w-full' />
                  <SkeletonCustom className='h-60 w-full' />
               </>
            )}
         </div>
      </div>
   );
}
