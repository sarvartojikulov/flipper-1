import React, { FC } from "react";

const BurgerSVG: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="29"
      height="17"
      viewBox="0 0 29 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 1H29M0 8.5H29M0 16H29" stroke="#1D2228" strokeWidth="2" />
    </svg>
  );
};

export default BurgerSVG;