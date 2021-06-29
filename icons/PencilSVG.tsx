import React, { FC } from "react";

const PencilSVG: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
      <path
        d="M13.232 3.23184L16.768 6.76784L13.232 3.23184ZM14.732 1.73184C15.2009 1.26294 15.8369 0.999512 16.5 0.999512C17.1631 0.999512 17.7991 1.26294 18.268 1.73184C18.7369 2.20074 19.0003 2.83671 19.0003 3.49984C19.0003 4.16297 18.7369 4.79894 18.268 5.26784L4.5 19.0358H1V15.4638L14.732 1.73184V1.73184Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PencilSVG;
