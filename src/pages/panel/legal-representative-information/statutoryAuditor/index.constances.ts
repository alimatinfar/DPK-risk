import type { TableColumnType } from "../../../../components/others/Table/TableExports.ts";

export const PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS = {
  CUSTOMER_NUMBER: 'customerNumber',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  NATIONAL_CODE: 'nationalCode',
  FROM_DATE: 'fromDate',
  TO_DATE: 'toDate',
} as const;

export const PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره مشتری',
    accessor: PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER,
  },
  {
    label: 'نام',
    accessor: PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.FIRST_NAME,
  },
  {
    label: 'نام خانوادگی',
    accessor: PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.LAST_NAME,
  },
  {
    label: 'کدملی',
    accessor: PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.NATIONAL_CODE,
  },
  {
    label: 'از تاریخ',
    accessor: PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.FROM_DATE,
  },
  {
    label: 'تا تاریخ',
    accessor: PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.TO_DATE,
  },
]