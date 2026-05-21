import type {TableColumnType} from "../../../../../components/others/Table/TableExports.ts";
import {
  PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS
} from "../../individual/commitments/index.constances.tsx";


export const PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS = {
  SHARED_CUSTOMER_NUMBER: 'sharedCustomerNumber',
  ...PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS,
} as const;

export const PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره مشتری مشترک',
    accessor: PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.SHARED_CUSTOMER_NUMBER,
  },
  ...PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS,
]
