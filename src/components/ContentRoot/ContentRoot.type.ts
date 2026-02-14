import { PropsWithChildren,ReactNode } from "react";

export interface IContentRootProps extends PropsWithChildren {
  title: string;
  className: string;
  headerBtns:ReactNode;
}
