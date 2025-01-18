import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function NotFound() {
   return (
      <div>
         <Header />
         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-blue-400">
         <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
            <h2 className="text-2xl text-gray-800 mb-6">
               صفحه‌ای که به دنبال آن هستید پیدا نشد.
            </h2>
            <p className="text-gray-600 mb-8">
               ممکن است آدرس را اشتباه وارد کرده باشید یا صفحه مورد نظر حذف شده باشد.
            </p>
            <div className="flex justify-center gap-4">
               <Link
                  to="/"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
               >
                  بازگشت به خانه
               </Link>
            </div>
         </div>
      </div>
      </div>
      
   );
}
