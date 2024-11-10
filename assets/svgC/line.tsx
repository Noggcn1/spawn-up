'use client';

import { SVGProps } from 'react';

export const LineSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1"
      height="3079"
      viewBox="0 0 1 3079"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.5"
        y1="-2.18557e-08"
        x2="0.500091"
        y2="3079"
        className="path"
        stroke="rgb(20, 240, 170)"
        strokeWidth="1px"
        strokeOpacity="0.3"
      />
      <line
        x1="0.5"
        y1="-2.18557e-08"
        x2="0.500091"
        y2="3079"
        stroke="white"
        strokeWidth="1px"
        strokeOpacity="0.1"
      />
    </svg>
  );
};
