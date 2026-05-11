import type { IconPropsType } from "../IconPropsType.ts";
type Props = {
  isOpen?: boolean;
} & IconPropsType;

function ArrowDown({ className, textColor, isOpen }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className={`${isOpen ? "rotate-180" : "rotate-0"} duration-200 ${{ ...(className && { className }) }} `}
    >
      <path
        className={`stroke-current duration-200 ${textColor || "text-gray-500"}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 6L8.00081 10.58L13 6"
      />
    </svg>
  );
}

export default ArrowDown;
