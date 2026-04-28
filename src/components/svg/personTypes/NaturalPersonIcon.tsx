import type {IconPropsType} from "../IconPropsType.ts";

function NaturalPersonIcon(
  {textColor, className}: IconPropsType
) {
  return (
    <svg
      {...className && {className}}
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`stroke-current duration-200 ${textColor || 'text-primary-text'}`}
        d="M2.69812 16.25C3.80263 14.4077 6.22335 13.1468 10 13.1468C13.7767 13.1468 16.1974 14.4077 17.3019 16.25M13 6.75C13 8.40685 11.6569 9.75 10 9.75C8.34316 9.75 7.00002 8.40685 7.00002 6.75C7.00002 5.09315 8.34316 3.75 10 3.75C11.6569 3.75 13 5.09315 13 6.75Z"
        stroke="#0E1012" strokeWidth="1.5" strokeLinecap="round"
      />
    </svg>
  );
}

export default NaturalPersonIcon;