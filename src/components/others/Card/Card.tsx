import React from 'react';
import type {ChildrenAndClassNamePropsType} from "../../../types/ChildrenPropsType.tsx";

function Card(
  {children, className}: ChildrenAndClassNamePropsType
) {
  return (
    <div className={`
      border border-gray-300 bg-white rounded-lg p-4 ${className || ''}
    `}>
      {children}
    </div>
  );
}

export default Card;