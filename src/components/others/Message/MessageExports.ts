import {type ReactNode} from "react";

export type MessageColor = 'warning' | 'success' | 'error'

export type MessageProps = {
  color: MessageColor;
  title?: string;
  titleIcon?: ReactNode;
  description?: string;
}
