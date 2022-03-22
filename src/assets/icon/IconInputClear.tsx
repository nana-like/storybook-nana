import { SVGProps } from 'react';

export default function IconClear(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <g
          fill="#222"
          opacity=".296"
          transform="translate(-1764 -237) translate(1280 80) translate(40 153) translate(444 4) translate(8 8)"
        >
          <circle cx="8" cy="8" r="8" />
        </g>
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M19.5 13.662L18.338 12.5 16 14.837 13.662 12.5 12.5 13.662 14.837 16 12.5 18.338 13.662 19.5 16 17.162 18.338 19.5 19.5 18.338 17.162 16z"
          transform="translate(-1764 -237) translate(1280 80) translate(40 153) translate(444 4)"
        />
      </g>
    </svg>
  );
}
