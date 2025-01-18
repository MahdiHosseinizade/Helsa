import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function SectionCourse({ data }) {
   const [activeIndex, setActiveIndex] = useState(null);

   const toggleAccordion = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
   };

   return (
      <div className="mt-40">
         <h3 className="text-3xl text-blue-gray-750">سرفصل های دوره :</h3>

         <div className="mt-5">
            {data?.syllabus_items?.map((item, index) => (
               <div
                  key={index}
                  className="my-4 shadow-sm cursor-pointer bg-white border border-gray-300 rounded-lg overflow-hidden"
               >
                  <div
                     onClick={() => toggleAccordion(index)}
                     className="px-6 h-16 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition duration-300"
                  >
                     <p className="text-xl text-[#993366]">{item.title}</p>
                     <div className="text-gray-600">
                        {activeIndex === index ? (
                           <GoChevronUp className="text-xl" />
                        ) : (
                           <GoChevronDown className="text-xl" />
                        )}
                     </div>
                  </div>

                  <div
                     className={`px-6 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                        activeIndex === index ? "max-h-40" : "max-h-0"
                     }`}
                  >
                     <div className="pt-4 pb-2">
                        {item.sub_items.map((sub_item, subIndex) => (
                           <p key={subIndex} className="my-2 text-sm text-gray-600">
                              {sub_item.title}
                           </p>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
