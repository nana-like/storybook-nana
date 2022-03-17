import { SVGProps } from 'react';

// export default function IconCheck(props: SVGProps<SVGSVGElement>) {
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" {...props}>
//     <path
//       fill="none"
//       stroke="currentColor"
//       stroke-width="1.25"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       stroke-miterlimit="10"
//       d="m1.5 3.6 3.2 4.3 4.8-6.4"
//     />
//   </svg>;
// }

export default function IconCheck(props: SVGProps<SVGSVGElement>) {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="none"
      fill-rule="nonzero"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="square"
      d="M10.5 16.691 14.04 20l7.46-7"
    />
  </svg>;
}
