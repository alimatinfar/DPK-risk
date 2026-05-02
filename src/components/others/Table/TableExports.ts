import TABLE_RENDER_TYPES from "./constances/renderTypes";
import type {ReactNode} from "react";



export type TableColumnType = {
  label: string;
  accessor: string;
  renderType?: ColumnsRenderTypes;
  tdWidth?: string;
  hasSort?: boolean;
};

type AccessorUnion<T extends readonly TableColumnType[]> =
  T[number]["accessor"];

export type TableDataType<T extends readonly TableColumnType[]> =
  { id: string | number } & Record<AccessorUnion<T>, unknown>;

export type TableProps<TColumns extends readonly TableColumnType[]> = {
  columns: TColumns;
  data: TableDataType<TColumns>[];
  loading?: boolean;
};

export const TABLE_COLUMN_SORT_KEYS = {
  ASCENDING: "ascending",
  DESCENDING: "descending",
  DEFAULT: "default",
} as const;

export type TableColumnSortType = typeof TABLE_COLUMN_SORT_KEYS[keyof typeof TABLE_COLUMN_SORT_KEYS];

export type ColumnsRenderTypes = typeof TABLE_RENDER_TYPES[keyof typeof TABLE_RENDER_TYPES]

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
