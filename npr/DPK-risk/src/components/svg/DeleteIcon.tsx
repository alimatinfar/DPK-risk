import type {IconPropsType} from "./IconPropsType.ts";

function DeleteIcon({textColor, className, height, width}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      fill="none"
      viewBox="0 0 20 20"
      {...className && {className}}
    >
      <path
        className={`stroke-current duration-200 ${textColor || 'text-red-800'}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.333 5.147h13.334M7.5 2.5h5M8.333 13.97V8.677m3.334 5.295V8.676m1.25 8.824H7.083c-.92 0-1.666-.79-1.666-1.765l-.38-9.669c-.02-.501.358-.919.832-.919h8.262c.474 0 .852.418.833.92l-.38 9.668c0 .975-.747 1.765-1.667 1.765"
      ></path>
    </svg>
  );
}

export default DeleteIcon;