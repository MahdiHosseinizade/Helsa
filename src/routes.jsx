import Home from "./pages/Home/Home";
import Courses from "./pages/AllCourses/Courses";
import Service from "./pages/Service/Service";
import DetailCourse from "./pages/DetailCourse/DetailCourse";
import TextSumm from "./pages/TextSummarizing/TextSummarizing";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import WebsiteDesign from "./pages/WebsiteDesign/WebsiteDesign";
import Seo from "./pages/Seo/Seo";
import NotFound from "./pages/404/404";

let routes = [
   {path: "/", element: <Home />},
   {path: "/courses", element: <Courses />},
   {path: "/service", element: <Service />},
   {path: "/courses/:courseName", element: <DetailCourse />},
   {path: "/service/summorize", element: <TextSumm />},
   {path: "/login", element: <Login />},
   {path: "/register", element: <Register />},
   {path: "/about", element: <AboutUs />},
   {path: "/contact", element: <Contact />},
   {path: "/seo", element: <Seo />},
   {path: "/websitedesign", element: <WebsiteDesign />},
   {path: "*", element: <NotFound />},
];

export {routes};
