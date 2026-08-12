import type {IconPropsType} from "./IconPropsType.ts";


function FileIcon({className, textColor, width, height}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      fill="none"
      viewBox="0 0 24 24"
      {...className && {className}}
    >
      <path
        className={`stroke-current duration-200 ${textColor || 'text-black'}`}
        stroke="#000"
        strokeWidth="2"
        d="M13.167 3v4.5c0 .621.522 1.125 1.166 1.125H19M13.367 3H7.333C6.045 3 5 4.007 5 5.25v13.5C5 19.993 6.045 21 7.333 21h9.334C17.955 21 19 19.993 19 18.75V8.432a2.2 2.2 0 0 0-.683-1.591l-3.3-3.182A2.38 2.38 0 0 0 13.367 3Z"
      ></path>
    </svg>
  )
}

export default FileIcon