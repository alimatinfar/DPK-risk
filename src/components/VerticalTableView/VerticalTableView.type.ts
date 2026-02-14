export interface IVerticalTableItem {
  label: string;
  value?: string | number | null;
}

export interface IVerticalTableViewProps {
  title: string;
  items: IVerticalTableItem[];
  columns?: number;
}
