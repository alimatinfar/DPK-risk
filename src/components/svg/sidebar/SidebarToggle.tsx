import type { IconPropsType } from "../IconPropsType";
type Props = {
  onClick?: () => void;
} & IconPropsType;
function SidebarToggle({ className, textColor, onClick }: Props) {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={` cursor-pointer transition-transform duration-200 ${{ ...(className && { className }) }} `}
        {...(onClick && { onClick })}
      >
        <path d="M0.5 4.5C0.5 2.29086 2.29086 0.5 4.5 0.5H24.5V24.5H4.5C2.29086 24.5 0.5 22.7091 0.5 20.5V4.5Z" fill="#F9FAFB" />
        <path
          d="M0 4.5C0 2.01472 2.01472 0 4.5 0H24.5V1H4.5C2.567 1 1 2.567 1 4.5H0ZM24.5 25H4.5C2.01472 25 0 22.9853 0 20.5H1C1 22.433 2.567 24 4.5 24H24.5V25ZM4.5 25C2.01472 25 0 22.9853 0 20.5V4.5C0 2.01472 2.01472 0 4.5 0V1C2.567 1 1 2.567 1 4.5V20.5C1 22.433 2.567 24 4.5 24V25ZM4.5 24M24.5 0.5V24.5V0.5"
          fill="#D1D5DB"
        />
        <path
          className={`stroke-current duration-200 ${textColor || "text-gray-700"}`}
          d="M10.4993 9.16675L7.16602 12.5001L10.4993 15.8334M14.4993 9.16675L17.8327 12.5001L14.4993 15.8334"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export default SidebarToggle;
