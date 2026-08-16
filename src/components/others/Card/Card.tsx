import React from 'react';
import type {ChildrenAndClassNamePropsType} from "../../../types/ChildrenPropsType.tsx";


type Props = {
  paddingClass?: string
} & ChildrenAndClassNamePropsType

function Card(
  {children, className, paddingClass}: Props
) {
  return (
    <div className={`
      border border-gray-300 bg-white rounded-lg ${paddingClass || 'p-4'} ${className || ''}
    `}>
      {children}
    </div>
  );
}

export default Card;
