import type { IconPropsType } from "../IconPropsType";
type Props = {
  onClick?: () => void;
  isOpen: boolean;
} & IconPropsType;
function SidebarToggle({ className, textColor, onClick, isOpen }: Props) {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${isOpen ? "rotate-180" : "rotate-0"} cursor-pointer duration-200 ${{ ...(className && { className }) }} `}
        {...(onClick && { onClick })}
      >
        <path
          className={`stroke-current duration-200 ${textColor || "text-gray-700"}`}
          d="M20.3827 20C20.778 19.5953 21 19.0464 21 18.4741L21 5.52595C21 4.95361 20.778 4.40471 20.3827 4M3 11.9988L14.9425 11.9988M10.3793 16.9314L14.9425 11.9988L10.3793 7.06618"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}

export default SidebarToggle;
