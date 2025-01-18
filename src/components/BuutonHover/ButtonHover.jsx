import React from "react";
import "./ButtonHover.css";
function ButtonHover({title}) {
   return (
      <div className='mx-auto w-max'>
         <button className='btnHover'>{title}</button>
      </div>
   );
}

export default ButtonHover;
