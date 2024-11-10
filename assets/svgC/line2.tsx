import { SVGProps } from 'react';
export const LineSVG2 = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="252"
      height="2"
      viewBox="0 0 252 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 1L252 1.00002"
        stroke="rgb(20, 240, 170)"
        className="path"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <path d="M0 1L252 1.00002" stroke="white" strokeOpacity="0.1" />
    </svg>
  );
};
