import { SVGProps } from 'react';

export default function IconSearch(
  props: SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#FFF"
          d="M0 0H1440V1377H0z"
          transform="translate(-368 -293)"
        />
        <g transform="translate(-368 -293) translate(360 284)">
          <rect
            width="299"
            height="39"
            x=".5"
            y=".5"
            fill="#FFF"
            stroke="#DFDFDF"
            rx="4"
          />
          <g stroke="#222" strokeWidth="1.4" opacity=".5">
            <path
              d="M12.5 4.699l.263.008c1.221.066 2.32.588 3.131 1.399.869.869 1.406 2.069 1.406 3.394 0 1.214-.451 2.324-1.195 3.169-.88 1-2.168 1.631-3.605 1.63h0V20.3h0v-6c-1.437 0-2.726-.631-3.605-1.631C8.15 11.824 7.7 10.714 7.7 9.5c0-1.325.537-2.525 1.406-3.394C9.975 5.237 11.175 4.7 12.5 4.7v-.001z"
              transform="translate(8 9) rotate(-45 12.5 12.5)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
