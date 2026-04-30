import RENDER_TYPES from "./constances/renderTypes";
import type {ReactNode} from "react";

export type TableColumnType = {
  label: string;
  accessor: string;
  renderType?: ColumnsRenderTypes;
  tdWidth?: string;
  hasSort?: boolean;
};

export const TABLE_COLUMN_SORT_KEYS = {
  ASCENDING: "ascending",
  DESCENDING: "descending",
  DEFAULT: "default",
} as const;

export type TableColumnSortType = typeof TABLE_COLUMN_SORT_KEYS[keyof typeof TABLE_COLUMN_SORT_KEYS];

export type TableDataType = {
  id: string | number;
} & any;

export type TableProps = {
  data: TableDataType[];
  columns: TableColumnType[];
  loading?: boolean;
}

export type ColumnsRenderTypes = typeof RENDER_TYPES[keyof typeof RENDER_TYPES]

export type ColumnsType = {
  label: string;
  accessor: string;
  renderType?: ColumnsRenderTypes;
  tdWidth?: string;
};

export type DataTableType = {
  id: string | number;
  extraAction?: ReactNode;
} & any;
