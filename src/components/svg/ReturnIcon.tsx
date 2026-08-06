import type {IconPropsType} from "./IconPropsType.ts";

function ReturnIcon({className, textColor}: IconPropsType) {
  return (
    <svg
      {...className && {className}}
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={`stroke-current duration-200 ${textColor || 'text-primary'}`}
        d="M12.5717 7.64332L17 12.0717L12.5717 16.5M17 12.0717H7C4.79086 12.0717 3 10.2808 3 8.07166V3.5"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export default ReturnIcon;
