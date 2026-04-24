import React from 'react';
import type {IconPropsType} from "./IconPropsType.ts";

function PlusIcon(
  {textColor, className}: IconPropsType
) {
  return (
    <svg
      {...className && {className}}
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`stroke-current ${textColor || 'text-primary'}`}
        d="M10 5L10 15M15 10L5 10" strokeWidth="2" strokeLinecap="round"
      />
    </svg>
  );
}

export default PlusIcon;