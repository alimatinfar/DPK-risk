import type {IconPropsType} from "./IconPropsType.ts";

function AmountIcon({className, textColor}: IconPropsType) {

  const pathClassName = `stroke-current duration-200 ${textColor || 'text-gray-500'}`

  return (
    <svg
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
      {...className && {className}}
    >
      <path
        className={pathClassName}
        d="M2 15.0679L2.00018 5.44068C2.00019 4.76723 2.65238 4.28633 3.29574 4.48537L3.36987 4.50831C5.59654 5.1972 8.00387 5.1972 10.2305 4.50831C12.6646 3.75526 15.3074 3.82734 17.6896 4.71175L18.0002 4.82707L18 15.4791C18 15.6396 17.8399 15.751 17.6894 15.6951C15.3072 14.8107 12.6644 14.7386 10.2303 15.4916C8.00367 16.1805 5.59633 16.1805 3.36967 15.4916L2 15.0679Z"
        strokeWidth="1.5" strokeLinejoin="round"
      />
      <path
        className={pathClassName}
        d="M12 9.99164C12 11.0962 11.1046 11.9916 10 11.9916C8.89543 11.9916 8 11.0962 8 9.99164C8 8.88707 8.89543 7.99164 10 7.99164C11.1046 7.99164 12 8.88707 12 9.99164Z"
        strokeWidth="1.5" strokeLinejoin="round"
      />
    </svg>

  );
}

export default AmountIcon;
