import React, {useEffect} from "react";
import {useRoutes} from "react-router-dom";
import {routes} from "./routes";
import {AuthProvider} from "./context/useAuth";
import {Toaster} from "react-hot-toast";

export default function App() {
   const router = useRoutes(routes);

   return (
      <AuthProvider>
         <div dir='rtl'>{router}</div>
         <Toaster position='top-right' reverseOrder={false} />
      </AuthProvider>
   );
}
