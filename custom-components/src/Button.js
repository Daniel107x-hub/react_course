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
}) {
  const finalClassName = className("px-3 py-1.5", {
    "border-1": outline,
    "bg-blue-500 text-white border-red-500": primary,
    "bg-gray-900 text-white": secondary,
    "bg-green-500 text-black": success,
    "bg-yellow-400 text-black": warning,
    "bg-red-500 text-black": danger,
    "rounded-full": rounded,
  });

  return <button className={finalClassName}>{children}</button>;
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
