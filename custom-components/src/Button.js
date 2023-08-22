import React from "react";
import className from "classnames";

function Button({
  children,
  plain,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const finalClassName = className(rest.className, 'flex items-center px-3 py-1.5 border', {
    'text-black border-black': plain,
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-black": success,
    "border-yellow-400 bg-yellow-400 text-black": warning,
    "border-red-500 bg-red-500 text-black": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger,
  });

  return <button className={finalClassName} {...rest}>{children}</button>;
}
Button.propTypes = {
  checkVariationValue: ({
    plain,
    primary,
    secondary,
    success,
    warning,
    danger,
  }) => {
    const result =
      Number(!!plain) +
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (result > 1)
      return new Error("Selected more than one button variation type");
  },
};

export default Button;
