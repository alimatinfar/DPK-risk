import React from 'react';
import type {IconPropsType} from './IconPropsType';

function BankIcon({className, textColor}: IconPropsType) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
      {...className && {className}}
    >
      <path
        className={`stroke-current duration-200 ${textColor || 'text-gray-700'}`}
        d="M2.66667 9.99961V8.2205M6.22223 9.99961V8.2205M9.77778 9.99961V8.2205M13.3333 9.99961V8.2205M1.60001 12.2663H14.4V14.3996H1.60001V12.2663ZM1.60001 5.86628V4.44405L7.73699 1.59961L14.4 4.44405V5.86628H1.60001Z"
        strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export default BankIcon;