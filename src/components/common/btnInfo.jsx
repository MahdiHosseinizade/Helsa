import Btn from "./btn";

const BtnInfo = ({children, ...rest}) => {
   return (
      <Btn className='py-2 px-4 ml-2 rounded-lg bg-sky-800 text-white ' {...rest}>
         {children}
      </Btn>
   );
};

export default BtnInfo;
