import type { TableColumnType } from "../../../../../components/others/Table/TableExports.ts";


export const PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS = {
  NAME: 'name',
  CUSTOMER_NUMBER: 'customerNumber',
  PERSON_TYPE: 'personType',
  NATIONALITY: 'nationality',
  NATIONAL_ID: 'nationalId',
  MANAGEMENT_SEAT_STATUS: 'managementSeatStatus',
  NUMBER_OF_SHARES: 'numberOfShares',
  SHARE_PERCENTAGE: 'sharePercentage',
  FROM_DATE: 'fromDate',
  TO_DATE: 'toDate',
} as const;

export const PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره مشتری',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER,
  },
  {
    label: 'نوع شخصیت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.PERSON_TYPE,
  },
  {
    label: 'ملیت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NATIONALITY,
  },
  {
    label: 'نام و نام خانوادگی / نام شرکت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NAME,
  },
  {
    label: 'کدملی / شناسه فراگیر اتباع / شناسه ملی',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NATIONAL_ID,
  },
  {
    label: 'وضعيت کرسي مديريت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.MANAGEMENT_SEAT_STATUS,
  },
  {
    label: 'تعداد سهام',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NUMBER_OF_SHARES,
  },
  {
    label: 'درصد سهام از کل',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.SHARE_PERCENTAGE,
  },
  {
    label: 'از تاريخ',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.FROM_DATE,
  },
  {
    label: 'تا تاريخ',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.TO_DATE,
  },
]
