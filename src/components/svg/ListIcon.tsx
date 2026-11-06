import type {IconPropsType} from "./IconPropsType.ts";

function ListIcon(
  {textColor, className}: IconPropsType
) {
  return (
    <svg
      {...className && {className}}
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`stroke-current duration-200 ${textColor || 'text-gray-900'}`}
        d="M7.00007 6H13.0001M7.00007 9H13.0001M7.00007 12H10.0001M5.49983 2H14.5C15.6046 2 16.5 2.89545 16.5 4.00004L16.4998 16C16.4998 17.1046 15.6043 18 14.4998 18L5.49975 18C4.39518 18 3.49975 17.1045 3.49976 15.9999L3.49983 3.99999C3.49984 2.89542 4.39527 2 5.49983 2Z"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export default ListIcon;
