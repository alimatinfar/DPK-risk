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
      border border-slate-300 bg-white dark:bg-dark-1 dark:border-dark-2 rounded-lg ${paddingClass || 'p-4'} ${className || ''}
    `}>
      {children}
    </div>
  );
}

export default Card;
