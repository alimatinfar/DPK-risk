import { PropsWithChildren, ReactNode } from "react";

export interface ITab {
  id: string;
  label: string;
  title: string;
  content: ReactNode;
}
export interface ITabsProps extends PropsWithChildren {
  tabs: ITab[];
  defaultActiveTab: null;
  className: string;
  buttons: ReactNode;
  isLoading: boolean;
  isError: boolean;
}
