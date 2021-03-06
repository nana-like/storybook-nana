import { SVGProps } from 'react';

export default function IconFilter(
  props: SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <g stroke="currentColor">
          <path
            d="M18.3 17.12c.417 0 .803.127 1.124.345.363.248.641.612.78 1.039l.045.163 1.451.153v.55h-1.416c-.07.56-.37 1.047-.803 1.364-.33.243-.74.386-1.181.386-.416 0-.803-.127-1.123-.345-.37-.252-.652-.625-.788-1.061l-.043-.167-6.046-.164v-.513h6.015c.07-.559.37-1.046.803-1.364.331-.243.74-.386 1.182-.386zm0 .5c-.414 0-.79.168-1.06.44-.272.27-.44.646-.44 1.06 0 .414.168.79.44 1.06.27.272.646.44 1.06.44.414 0 .79-.168 1.06-.44.272-.27.44-.646.44-1.06 0-.414-.168-.79-.44-1.06-.27-.272-.646-.44-1.06-.44zm-4.6-6.75c.48 0 .92.169 1.264.45.404.33.677.815.728 1.365l.008.186 6-.001v.5h-6.063c-.126.49-.433.906-.844 1.175-.314.206-.69.325-1.093.325s-.779-.12-1.093-.325c-.366-.239-.648-.594-.795-1.014l-.049-.16H10.3v-.5h1.4c0-.626.287-1.184.736-1.551.345-.281.785-.45 1.264-.45zm0 .5c-.414 0-.79.168-1.06.44-.272.27-.44.646-.44 1.06 0 .414.168.79.44 1.06.27.272.646.44 1.06.44.414 0 .79-.168 1.06-.44.272-.27.44-.646.44-1.06 0-.414-.168-.79-.44-1.06-.27-.272-.646-.44-1.06-.44z"
            transform="translate(-710 -340) translate(706 336) translate(4 4)"
          />
        </g>
      </g>
    </svg>
  );
}
