import React, { FC } from "react";

const PipeSVG: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="2"
      height="37"
      viewBox="0 0 2 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 0V37" stroke="#EBEBEB" />
    </svg>
  );
};

export default PipeSVG;