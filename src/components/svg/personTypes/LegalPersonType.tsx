import type {IconPropsType} from "../IconPropsType.ts";

function LegalPersonType(
  {textColor, className}: IconPropsType
) {
  return (
    <svg
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
      {...className && {className}}
    >
      <path
        className={`stroke-current duration-200 ${textColor || 'text-primary-text'}`}
        d="M6.25002 9.16667H3.83335C3.36664 9.16667 3.13329 9.16667 2.95503 9.25749C2.79823 9.33739 2.67074 9.46487 2.59085 9.62167C2.50002 9.79993 2.50002 10.0333 2.50002 10.5V17.5M13.75 9.16667H16.1667C16.6334 9.16667 16.8668 9.16667 17.045 9.25749C17.2018 9.33739 17.3293 9.46487 17.4092 9.62167C17.5 9.79993 17.5 10.0333 17.5 10.5V17.5M13.75 17.5V5.16667C13.75 4.23325 13.75 3.76654 13.5684 3.41002C13.4086 3.09641 13.1536 2.84144 12.84 2.68166C12.4835 2.5 12.0168 2.5 11.0834 2.5H8.91669C7.98327 2.5 7.51656 2.5 7.16004 2.68166C6.84643 2.84144 6.59147 3.09641 6.43168 3.41002C6.25002 3.76654 6.25002 4.23325 6.25002 5.16667V17.5M18.3334 17.5H1.66669M9.16669 5.83333H10.8334M9.16669 9.16667H10.8334M9.16669 12.5H10.8334"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export default LegalPersonType;