import type {ChildrenAndClassNamePropsType} from "../../../types/ChildrenPropsType.tsx";
import React from "react";

function CardRightRed(
  {children, className}: ChildrenAndClassNamePropsType
) {
  return (
    <div className={`
      p-4 rounded-lg border-r-6 border-[#EF4444] dark:border-red-600 bg-linear-to-l
       from-[#FBEFEF] to-[#F3F4F6] dark:from-dark-1 dark:to-dark-6
        ${className || ''}
    `}>
      {children}
    </div>
  );
}

export default CardRightRed;
