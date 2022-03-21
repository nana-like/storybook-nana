import { SVGProps } from 'react';

export default function IconDropDown(
  props: SVGProps<SVGSVGElement>
): JSX.Element {
  const color = '#222';
  const opacity = '1';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
        opacity={opacity}
      >
        <g stroke={color} strokeWidth="1.5">
          <path
            d="M0 0L3 3 6 0"
            transform="translate(-604 -3589) translate(300 2746) translate(20 7) translate(0 257) translate(0 541) translate(0 30) translate(284 8) translate(13 15)"
          />
        </g>
      </g>
    </svg>
  );
}
