import Btn from "./btn";

const BtnSuccess = ({children, ...rest}) => {
   return (
      <Btn className=' justify-end w-full flex  text-white  ' {...rest}>
         <div className='rounded-lg py-2 px-4 ml-2 bg-green-800'>{children}</div>
      </Btn>
   );
};

export default BtnSuccess;
