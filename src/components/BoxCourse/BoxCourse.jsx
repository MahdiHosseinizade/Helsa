import React from "react";
import {RxLapTimer} from "react-icons/rx";
import {CiCircleMore} from "react-icons/ci";
import {FaUsers} from "react-icons/fa";
import {Link} from "react-router-dom";
function BoxCourse(props) {
   return (
      <Link key={props.id} to={`/courses/${props.id}`}>
         <div className='rounded-xl overflow-hidden shadow-xl'>
            <img className='size-full max-h-60 min-h-60    object-cover' src={props.photo} alt='' />
            <div className='p-5 '>
               <p>{props.title}</p>
               <div className='flex gap-3 mt-2 border-b border-gray-300 pb-3'>
                  <div className='mt-2 flex items-center gap-2 text-gray-600'>
                     <span className='text-lg'>
                        <RxLapTimer />
                     </span>
                     <span className=' text-sm mt-1'>{props.length} ساعت آموزش</span>
                  </div>
                  <div className='mt-3 text-blue-700 cursor-pointer   flex items-center gap-2'>
                     <span className='text-xl'>
                        <CiCircleMore />
                     </span>
                     <span className=' text-sm mt-1'>مشاهده جزئیات</span>
                  </div>
               </div>
               <div className='flex mt-3 justify-between items-center text-gray-600'>
                  <div className='flex items-center gap-1'>
                     <FaUsers className='text-xl' />
                     <p className='mt-1 text-sm'>{props.enrolled_learners}</p>
                  </div>
                  <p className='  text-left'>{props.price.toLocaleString()} ریال</p>
               </div>
            </div>
         </div>
      </Link>
   );
}

export default BoxCourse;
