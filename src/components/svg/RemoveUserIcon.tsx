import type {IconPropsType} from "./IconPropsType";

function RemoveUserIcon({className, textColor}: IconPropsType) {
  return (
    <svg
      {...className && {className}}
      width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`stroke-current duration-200 ${textColor || 'text-gray-500'}`}
        d="M1.3125 12.5999L1.31274 10.4997C1.31287 9.33996 2.25303 8.3999 3.41274 8.3999H7.2625M12.6875 9.0999H9.5375M8.3125 3.4999C8.3125 4.6597 7.3723 5.5999 6.2125 5.5999C5.0527 5.5999 4.1125 4.6597 4.1125 3.4999C4.1125 2.3401 5.0527 1.3999 6.2125 1.3999C7.3723 1.3999 8.3125 2.3401 8.3125 3.4999Z"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>

  );
}

export default RemoveUserIcon;