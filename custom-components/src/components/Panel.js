import React from "react";
import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalCLassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...rest} className={finalCLassNames}>
      {children}
    </div>
  );
}

export default Panel;
