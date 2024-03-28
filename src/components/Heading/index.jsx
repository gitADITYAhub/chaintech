import React from "react";

const sizes = {
  "2xl": "text-[120px] font-black md:text-5xl",
  xl: "text-[50px] font-semibold md:text-[46px] sm:text-[40px]",
  s: "text-[15px] font-semibold",
  md: "text-lg font-semibold",
  xs: "text-sm font-semibold",
  lg: "text-[23px] font-semibold md:text-[21px]",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_02 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
