import { ReactNode } from "react";

export interface ITableItem {
  id: string;
  label: string;
  value: string | number | ReactNode;
}
export interface ITableViewProps {
  items: ITableItem[];
  defaultActiveTab: null;
  title: string;
}
