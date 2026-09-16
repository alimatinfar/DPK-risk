import {type RefObject} from "react";
import type {ChildrenPropsType} from "../../../types/ChildrenPropsType.tsx";
import Loading from "../Loading/Loading.tsx";

type Props = {
  children: ChildrenPropsType["children"];
  className?: string;
  onClick?: (e?:any) => void;
  rounded?: "rounded-full" | "rounded-md" | "rounded-lg";
  isButton?: boolean;
  wrapperRef?: RefObject<HTMLDivElement>;
  hoverClass?: string;
  loading?: boolean;
};

function IconClickable(
  {
    children, className, onClick, rounded = "rounded-lg", wrapperRef, hoverClass, loading
  }: Props
) {
  return loading ? (
    <div className={`flex-center ${className || ''}`}>
      <Loading size='sm' />
    </div>
    ) : (
    <div
      {...(onClick && {onClick})} {...wrapperRef && {ref: wrapperRef}}
      className={`${className || ""} p-1.5 cursor-pointer ${rounded} duration-200 ${hoverClass || 'hover:bg-gray-100'}`}
    >
      {children}
    </div>
  );
}

export default IconClickable;
