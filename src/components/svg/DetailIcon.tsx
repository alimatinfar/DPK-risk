import React from 'react';
import type {IconPropsType} from "./IconPropsType.ts";

function DetailIcon({textColor, className}: IconPropsType) {
  return (
    <svg
      {...className && {className}}
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={`stroke-current duration-200 ${textColor || 'text-black'}`}
        d="M5 7.5H10.625M5 10H10.625M5 12.5H10.625M13.3333 7.5H14.7917M13.3333 10H14.7917M13.3333 12.5H14.7917M3.75 16.25H16.25C16.7473 16.25 17.2242 16.0525 17.5758 15.7008C17.9275 15.3492 18.125 14.8723 18.125 14.375V5.625C18.125 5.12772 17.9275 4.65081 17.5758 4.29917C17.2242 3.94754 16.7473 3.75 16.25 3.75H3.75C3.25272 3.75 2.77581 3.94754 2.42417 4.29917C2.07254 4.65081 1.875 5.12772 1.875 5.625V14.375C1.875 14.8723 2.07254 15.3492 2.42417 15.7008C2.77581 16.0525 3.25272 16.25 3.75 16.25Z"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export default DetailIcon;
