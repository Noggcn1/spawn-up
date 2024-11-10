import { SVGProps } from 'react';

export const SvgCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="227"
    height="227"
    viewBox="0 0 227 227"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="0.5"
      y="0.5"
      width="226"
      height="226"
      rx="113"
      stroke="white"
      strokeOpacity="0.1"
    />
    <rect
      x="0.5"
      y="0.5"
      width="226"
      height="226"
      rx="113"
      strokeOpacity="0.3"
      stroke="rgb(20, 240, 170)"
      strokeWidth="1"
      className="path"
    />
  </svg>
);
