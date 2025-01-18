import React, {createContext, useState, useContext, useEffect} from "react";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();
export const AuthProvider = ({children}) => {
   let navigate = useNavigate();
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));

   const fetchUser = async () => {
      try {
         let token = localStorage.getItem("accessToken");
         if (token) {
            const response = await axios.get("https://helsa-api.liara.run/users/me/", {
               headers: {Authorization: `JWT ${token}`},
            });
            setUser(response.data);
         } else {
            setUser(null);
         }
      } catch (error) {
         console.error("Error fetching user data:", error);
         setUser(null);
      }
   };

   const verifyToken = async (token) => {
      try {
         await axios.post("https://helsa-api.liara.run/auth/jwt/verify/", {token});
         return true;
      } catch (error) {
         return false;
      }
   };

   const refreshTokenRequest = async () => {
      try {
         const response = await axios.post("https://helsa-api.liara.run/auth/jwt/refresh/", {
            refresh: refreshToken,
         });
         const {access, refresh} = response.data;
         localStorage.setItem("accessToken", access);
         localStorage.setItem("refreshToken", refresh);
         setRefreshToken(refresh);
         return access;
      } catch (error) {
         console.error("Error refreshing token:", error);
         logout();
      }
   };

   const login = async (username, password) => {
      try {
         const response = await axios.post("https://helsa-api.liara.run/auth/jwt/create/", {
            username,
            password,
         });

         if (response.status > 199 && response.status < 300) {
            const {access, refresh} = response.data;
            localStorage.setItem("accessToken", access);
            localStorage.setItem("refreshToken", refresh);
            setRefreshToken(refresh);
            await fetchUser();
            toast.success("با موفقیت وارد شدید");
            navigate("/");
         }
      } catch (error) {
         toast.error(error.response.data.detail);
      }
   };

   const register = async (userData) => {
      try {
         let res = await axios.post("https://helsa-api.liara.run/users/", userData);
         if (res.status) {
            toast.success("ثبت نام شما در هلسا موفقیت آمیز بود");
            navigate("/login");
         }
      } catch (error) {

         toast.error(error.response.data.password || error.response.data.username || "Registration failed");
      }
   };

   const logout = () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.clear();
      setUser(null);
      setRefreshToken(null);
   };

   const authenticate = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
         const isValid = await verifyToken(token);
         if (isValid) {
            await fetchUser();
         } else {
            const newAccessToken = await refreshTokenRequest();
            if (newAccessToken) {
               await fetchUser();
            }
         }
      } else {
         setUser(null);
      }
      setLoading(false);
   };

   useEffect(() => {
      authenticate();
   }, []);

   return <AuthContext.Provider value={{user, login, register, logout, loading}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
   return useContext(AuthContext);
};
