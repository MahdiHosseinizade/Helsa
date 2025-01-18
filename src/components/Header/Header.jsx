import React, {useEffect, useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {LiaSearchSolid} from "react-icons/lia";
import {LuMenu} from "react-icons/lu";
import {MenuCustomList} from "../Menu/Menu";
import {useAuth} from "../../context/useAuth";
import useFetch from "../../../hooks/useFetch";
import {Button, Menu, MenuHandler, MenuItem, MenuList} from "@material-tailwind/react";

const ItemLink = [
   {title: "صفحه اصلی", path: "/"},
   {title: "دوره های آموزشی", path: "/courses", subMenu: true},
   {title: "خدمات", path: "/service"},
   {title: "تماس با ما", path: "/contact"},
   {title: "درباره ما", path: "/about"},
];

export default function Header() {
   const {user, logout, loading} = useAuth();
   const [openDrawerMenu, setOpenDrawerMenu] = useState(false);
   const [headerSize, setHeaderSize] = useState(false);
   const [isResize, setIsResize] = useState(false);
   const {data, fetchData} = useFetch();

   const containerMenu = useRef();
   const location = useLocation();

   const ShowDrawerMenu = () => {
      setOpenDrawerMenu(!openDrawerMenu);
   };

   useEffect(() => {
      setOpenDrawerMenu(false);
   }, [location.pathname]);

   const resizeHeader = () => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 1) {
            setHeaderSize(true);
         } else {
            setHeaderSize(false);
         }
         if (window.screen.availWidth > 870) {
            setIsResize(true);
         } else {
            setIsResize(false);
         }
      });
      window.addEventListener("resize", () => {
         if (window.screen.availWidth > 870) {
            setIsResize(true);
         } else {
            setIsResize(false);
         }
      });
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      resizeHeader();
      fetchData("https://helsa-api.liara.run/courses/");
      return () => {
         resizeHeader();
      };
   }, []);

   if (loading) {
      return <div>Loading...</div>;
   }

   return (
      <div className='md:sticky top-0 bg-white z-[555] relative shadow'>
         <div
            style={{transition: "0.3s"}}
            className={`container ${
               isResize && headerSize ? "md:p-2" : "px-7 lg:px-0 py-6 md:py-8"
            } overflow-hidden items-center flex justify-between max-w-screen-lg`}
         >
            {/* Logo */}
            <div className='flex flex-row gap-4 items-center'>
               <Link to='/'>
                  <img className='h-10 w-10' src='/img/logo.png' alt='Logo of Helsa' />
               </Link>
               <div>
                  {user ? (
                     <span>
                        {user.username}
                        <span>/</span>
                        <button onClick={logout}>خروج</button>
                     </span>
                  ) : (
                     <>
                        <Link to='/login'>ورود</Link>
                        <span>/</span>
                        <Link to='/register'>ثبت نام</Link>
                     </>
                  )}
               </div>
            </div>
            <div className='flex items-center gap-7'>
               <div className='hidden md:flex gap-7 items-center'>
                  {ItemLink.map((link, index) => (
                     // link.subMenu ? (
                     //    <MenuCustomList
                     //       key={index}
                     //       offset={isResize && headerSize ? 10 : 32}
                     //       className={`${location.pathname.includes(link.path) ? "text-pink" : "text-gray-600"}`}
                     //       handeler={
                     //          <Link to={link.path}>
                     //             <span className='text-sm'>{link.title}</span>
                     //          </Link>
                     //       }
                     //    >
                     //       {data.map((item) => (
                     //          <Link
                     //             key={item.id}
                     //             to={`/courses/${item.id}`}
                     //             className={`${
                     //                location.pathname === `/courses/${item.id}` && "text-pink"
                     //             } my-2.5 outline-none`}
                     //          >
                     //             {item.title}
                     //          </Link>
                     //       ))}
                     //    </MenuCustomList>
                     // ) : (
                     <Link
                        key={link.title}
                        to={link.path}
                        className={`${location.pathname === link.path ? "text-pink" : "text-gray-600"}`}
                     >
                        <span className='text-sm'>{link.title}</span>
                     </Link>
                  ))}
               </div>

               {/* Icon Search And Menu */}

               <div className='flex gap-4 items-center '>
                  <span
                     onClick={ShowDrawerMenu}
                     className='md:hidden relative  block text-2xl md:text-xl text-blue-600'
                  >
                     {/* Container DrawerMenu Mobile */}

                     <Menu
                        animate={{
                           mount: {y: 0},
                           unmount: {y: 25},
                        }}
                        offset={30}
                        placement='bottom-end'
                     >
                        <MenuHandler>
                           <div>
                              <LuMenu />
                           </div>
                        </MenuHandler>
                        <MenuList className='w-[85%] mx-auto border-x-0 border-b-0 border-t-3 border-blue-500 rounded-none !shadow-lg'>
                           {ItemLink.map((link, index) => (
                              <Link key={index} to={link.path} className='text-gray-600 outline-none '>
                                 <p
                                    className={`${
                                       link.subMenu
                                          ? location.pathname.includes(link.path) && "text-pink"
                                          : link.path === location.pathname && "text-pink"
                                    } text-base  justify-end p-3 flex items-center gap-2`}
                                 >
                                    {link.title}
                                    <span className='size-1.5 bg-pink'></span>
                                 </p>
                                 {/* {link.subMenu &&
                                    data.map((item) => (
                                       <Link
                                          className={`${
                                             location.pathname === `/courses/${item.id}` && "text-pink"
                                          } block mr-7 py-1 text-sm !text-right`}
                                          key={item.id}
                                          to={`/courses/${item.id}`}
                                       >
                                          {item.title}
                                       </Link>
                                    ))} */}
                              </Link>
                           ))}
                        </MenuList>
                     </Menu>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}
