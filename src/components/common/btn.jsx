const Btn = ({ Tag = "a", children, className, ...rest }) => {
    return (
      <Tag className={"cursor-pointer select-none inline-block rounded-md " + className} {...rest}>
        {children}
      </Tag>
    );
  };
  
  export default Btn;
  