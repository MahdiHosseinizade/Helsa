import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { useAuth } from "../../context/useAuth";
import toast from "react-hot-toast";
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";

const Register = () => {
   const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
   });

   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const { register } = useAuth();

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
         toast.error("رمز و تایید رمز عبور با هم مطابقت ندارند");
         return;
      }
      try {
         delete formData.confirmPassword;
         await register(formData);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div>
         <Header />
         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-blue-300">
            <div className="flex w-4/5 max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
               <div className="hidden md:flex flex-col items-center justify-center w-1/3 bg-gradient-to-b from-purple-600 to-blue-900 p-6">
                  <img
                     className="h-20 w-auto mb-4 rounded-md"
                     src="/img/logo.png"
                     alt="Logo of Helsa"
                  />
                  <h2 className="text-white text-2xl font-semibold">
                     به وبسایت هلسا خوش آمدید
                  </h2>
               </div>

               <div className="w-full md:w-2/3 p-8">
                  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                     ثبت نام
                  </h2>
                  <form onSubmit={handleSubmit}>
                     <div className="mb-4">
                        <label
                           htmlFor="first_name"
                           className="block text-gray-700 font-medium mb-2"
                        >
                           نام:
                        </label>
                        <input
                           type="text"
                           id="first_name"
                           name="first_name"
                           value={formData.first_name}
                           onChange={handleChange}
                           required
                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                     </div>
                     <div className="mb-4">
                        <label
                           htmlFor="last_name"
                           className="block text-gray-700 font-medium mb-2"
                        >
                           نام خانوادگی:
                        </label>
                        <input
                           type="text"
                           id="last_name"
                           name="last_name"
                           value={formData.last_name}
                           onChange={handleChange}
                           required
                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                     </div>
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
                           value={formData.username}
                           onChange={handleChange}
                           required
                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                     </div>
                     <div className="mb-4">
                        <label
                           htmlFor="email"
                           className="block text-gray-700 font-medium mb-2"
                        >
                           ایمیل:
                        </label>
                        <input
                           type="email"
                           id="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                     </div>
                     <div className="mb-4 relative">
                        <label
                           htmlFor="password"
                           className="block text-gray-700 font-medium mb-2"
                        >
                           رمز عبور:
                        </label>
                        <input
                           type={showPassword ? "text" : "password"}
                           id="password"
                           name="password"
                           value={formData.password}
                           onChange={handleChange}
                           required
                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <button
                           type="button"
                           onClick={() => setShowPassword(!showPassword)}
                           className="absolute left-3 bottom-1 transform -translate-y-1/2 text-gray-600"
                        >
                           {showPassword ? <ImEyeBlocked /> : <ImEye />}
                        </button>
                     </div>
                     <div className="mb-4 relative">
                        <label
                           htmlFor="confirmPassword"
                           className="block text-gray-700 font-medium mb-2"
                        >
                           تایید رمز عبور:
                        </label>
                        <input
                           type={showConfirmPassword ? "text" : "password"}
                           id="confirmPassword"
                           name="confirmPassword"
                           value={formData.confirmPassword}
                           onChange={handleChange}
                           required
                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <button
                           type="button"
                           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                           className="absolute left-3 bottom-1 transform -translate-y-1/2 text-gray-600"
                        >
                           {showConfirmPassword ? <ImEyeBlocked /> : <ImEye />}
                        </button>
                     </div>
                     <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
                     >
                        ثبت نام
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;
