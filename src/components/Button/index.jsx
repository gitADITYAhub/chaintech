import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[19px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-xs text-black-900_02",
  },
  outline: {
    white_A700_66_white_A700: "border-black-900_02 border-2 border-solid bg-gradient shadow-md text-black-900_02",
  },
};
const sizes = {
  md: "h-[66px] pl-[25px] pr-[19px] text-lg",
  sm: "h-[48px] px-3.5",
  xs: "h-[38px] pl-[18px] pr-2 text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xs",
  color = "black_900_02",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer border-black-900_02 border-solid ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "white_A700_66_white_A700"]),
};

export { Button };
