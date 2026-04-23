import type {IconPropsType} from "./IconPropsType.ts";

type Props = {
  strokeWidth?: string
} & IconPropsType

function UserCircleIcon({textColor, className, strokeWidth, width, height}: Props) {
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
        className={`stroke-current ${textColor || 'text-gray-500'}`}
        strokeWidth={strokeWidth || "1.25"}
        d="M5.4 19.2c.461-.516 2.62-2.893 3.254-2.893h6.692c.918 0 2.79 1.97 3.254 2.665m3-6.972a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0Zm-6.161-3.272C15.439 6.897 13.893 5.4 12 5.4c-1.892 0-3.438 1.497-3.438 3.328 0 1.832 1.546 3.328 3.438 3.328s3.439-1.496 3.439-3.328Z"
      ></path>
    </svg>
  );
}

export default UserCircleIcon;
