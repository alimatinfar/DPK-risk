import type {IconPropsType} from "./IconPropsType";

function LetterIcon({className, textColor}: IconPropsType) {
  return (
    <svg
      {...className && {className}}
      width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`stroke-current duration-200 ${textColor || 'text-gray-500'}`}
        d="M2.73438 3.93758L6.62646 6.7319C6.85119 6.89324 7.14881 6.89324 7.37354 6.7319L11.2656 3.93758M3.0625 11.0834H10.9375C11.6624 11.0834 12.25 10.474 12.25 9.7223V4.27786C12.25 3.52614 11.6624 2.91675 10.9375 2.91675H3.0625C2.33763 2.91675 1.75 3.52614 1.75 4.27786V9.7223C1.75 10.474 2.33763 11.0834 3.0625 11.0834Z"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>

  );
}

export default LetterIcon;