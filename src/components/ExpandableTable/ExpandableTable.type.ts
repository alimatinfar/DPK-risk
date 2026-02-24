import { ReactNode } from "react";

export interface IExpandableTableProps {
  data: any[];
  columns: IColumn[];
  filter?: boolean;
  expandedRowTemplate?: (row: any) => ReactNode;
  paginator?: boolean;
  initialRowsPerPage?: number;
  className?: string;
  showRowNumber?: boolean;
  tblClassName?: string;
}

export interface IColumn {
  field: string;
  id?: string;
  header: string;
  width?: string;
  body?: (row: any) => void;
  bodyClassName?: string;
}
