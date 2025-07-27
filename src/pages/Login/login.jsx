import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { useAuth } from "../../context/useAuth";
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const { login } = useAuth();

   // Formik hook
   const formik = useFormik({
      initialValues: {
         username: "",
         password: "",
      },
      validationSchema: Yup.object({
         username: Yup.string().required("نام کاربری ضروری است"),
         password: Yup.string().required("رمز عبور ضروری است"),
      }),
      onSubmit: async (values) => {
         try {
            await login(values.username, values.password);
         } catch (error) {
            toast.error(error.message);
         }
      },
   });

   return (
      <div>
         <Header />
         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-blue-300">
            <div className="flex w-4/5 max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
               <div className="hidden md:flex flex-col items-center justify-center w-1/3 bg-gradient-to-b from-purple-600 to-blue-900 p-6">
                  <img
                     className="h-20 w-auto mb-4 rounded-md"
                     src="/img/logo1.png"
                     alt=""
                  />
                  <h2 className="text-white text-2xl font-semibold">
                     به وبسایت هلسا خوش آمدید
                  </h2>
               </div>

               <div className="w-full md:w-2/3 p-8">
                  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                     ورود
                  </h2>
                  <form onSubmit={formik.handleSubmit}>
                     <div className="mb-4">
                        <label
                           htmlFor="username"
                           className="block text-gray-700 font-medium mb-2"
                        >
                           نام کاربری:
                        </label>
                        <input
                           type="text"
                           id="username"
                           name="username"
                           value={formik.values.username}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                              formik.errors.username && formik.touched.username
                                 ? "border-red-500 focus:ring-red-400"
                                 : "border-gray-300 focus:ring-purple-400"
                           }`}
                        />
                        {formik.errors.username && formik.touched.username && (
                           <div className="text-red-500 text-sm mt-1">
                              {formik.errors.username}
                           </div>
                        )}
                     </div>

                     <div className="mb-4">
                        <label
                           htmlFor="password"
                           className="block text-gray-700 font-medium mb-2"
                        >
                           رمز عبور:
                        </label>
                        <div className="relative">
                           <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className={`w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
                                 formik.errors.password && formik.touched.password
                                    ? "border-red-500 focus:ring-red-400"
                                    : "border-gray-300 focus:ring-purple-400"
                              }`}
                           />
                           <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                           >
                              {showPassword ? <ImEyeBlocked /> : <ImEye />}
                           </button>
                        </div>
                        {formik.errors.password && formik.touched.password && (
                           <div className="text-red-500 text-sm mt-1">
                              {formik.errors.password}
                           </div>
                        )}
                     </div>

                     <button
                        onSubmit={formik.handleSubmit}
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
                     >
                        ورود
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
