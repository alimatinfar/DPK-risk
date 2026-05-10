import type {IconPropsType} from "./IconPropsType.ts";


function ArrowIcon2(
  {textColor, className, height, width}: IconPropsType
) {
  return (
    <svg
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
      {...className && {className}}
    >
      <path
        d="M8.88861 4.16669L3.33305 10L8.88861 15.8334M3.33305 10L16.6664 10"
        className={`stroke-current duration-200 ${textColor || 'text-gray-900'}`}
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowIcon2;