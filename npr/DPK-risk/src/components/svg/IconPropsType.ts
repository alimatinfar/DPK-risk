import type {ReactNode} from "react";

export type IconPropsType = {
  className?: string;
  textColor?: string;
  width?: string | number;
  height?: string | number;
  strokeClass?: string;
}

export type IconFunctionType = (props: IconPropsType) => ReactNode;