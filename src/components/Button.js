import classnames from "classnames";
import React from "react";

const Button = ({
  children,
  primary,
  secondary,
  success,
  danger,
  outline,
  warning,
  rounded,
  ...rest
}) => {
  const classes = classnames(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-green-500 bg-green-500 text-white": success,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-600": outline && primary,
      "text-gray-700": outline && secondary,
      "text-yellow-600 ": outline && warning,
      "text-green-700": outline && success,
      "text-red-600": outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) {
      return new Error(`Invalid value for ${primary}`);
    }
  },
};
export default Button;
