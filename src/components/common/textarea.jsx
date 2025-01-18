import {forwardRef} from "react";

const Textarea = forwardRef(function Textarea({className, ...rest}, ref) {
   return (
      <div className='w-full md:w-2/3'>
         <p className='mb-2'>متن شما</p>
         <textarea
            ref={ref}
            className={"text-sm w-full h-full p-3 shadow-sm mb-40 border-2 rounded-md border-purple-300 " + className}
            placeholder='متن خود را در این قسمت وارد کنید...'
            rows='10'
            {...rest}
         ></textarea>
      </div>
   );
});

export default Textarea;
