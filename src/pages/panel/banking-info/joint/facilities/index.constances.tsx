import type {TableColumnType} from "../../../../../components/others/Table/TableExports.ts";
import Tag from "../../../../../components/others/Tag/Tag.tsx";
import {
  PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS
} from "../../individual/facilities/index.constances.tsx";


export const PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS = {
  SHARED_CUSTOMER_NUMBER: 'sharedCustomerNumber',
  ...PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS,
} as const;

export const PANEL_JOINT_FACILITIES_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره مشتری مشترک',
    accessor: PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.SHARED_CUSTOMER_NUMBER,
  },
  ...PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS,
]
