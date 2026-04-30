import {type ReactNode} from "react";

export type ChildrenPropsType = {
  children: ReactNode
}

export type ChildrenAndClassNamePropsType = {
  children: ReactNode;
  className?: string;
}