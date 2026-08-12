import type { IconPropsType } from "./IconPropsType.ts";

function UploadIcon({className, textColor}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      {...className && {className}}
    >
      <path
        className={`stroke-current duration-200 ${textColor || 'text-gray-900'}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.857 20.572C5.727 20.572 4 19.239 4 17.284s1.727-3.539 3.857-3.539q.218 0 .429.022v-.022h.053a6 6 0 0 1-.053-.786c0-3.475 3.07-6.292 6.857-6.292 2.564 0 4.8 1.291 5.976 3.204q.432-.058.881-.058c3.314 0 6 2.464 6 5.505 0 2.503-1.82 4.41-4.312 5.04m-7.877 4.975v-9.032m0 0-3.936 3.725m3.936-3.725 3.939 3.725"
      ></path>
    </svg>
  )
}

export default UploadIcon