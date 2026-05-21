import type { TableColumnType} from "../../../../../components/others/Table/TableExports.ts";


export const PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS = {
  NAME: 'name',
  CUSTOMER_NUMBER: 'customerNumber',
  PERSON_TYPE: 'personType',
  NATIONALITY: 'nationality',
  NATIONAL_ID: 'nationalId',
  MANAGEMENT_SEAT_STATUS: 'managementSeatStatus',
  CAPITAL_AMOUNT: 'capitalAmount',
  OWNERSHIP_PERCENTAGE: 'ownershipPercentage',
  FROM_DATE: 'fromDate',
  TO_DATE: 'toDate',
} as const;

export const PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره مشتری',
    accessor: PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER,
  },
  {
    label: 'نوع شخصیت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.PERSON_TYPE,
  },
  {
    label: 'ملیت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.NATIONALITY,
  },
  {
    label: 'نام و نام خانوادگی / نام شرکت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.NAME,
  },
  {
    label: 'کدملی / شناسه فراگیر اتباع / شناسه ملی',
    accessor: PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.NATIONAL_ID,
  },
  {
    label: 'وضعيت کرسي مديريت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.MANAGEMENT_SEAT_STATUS,
  },
  {
    label: 'مبلغ سرمایه (ریال)',
    accessor: PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.CAPITAL_AMOUNT,
  },
  {
    label: 'درصد مالکیت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.OWNERSHIP_PERCENTAGE,
  },
  {
    label: 'از تاريخ',
    accessor: PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.FROM_DATE,
  },
  {
    label: 'تا تاريخ',
    accessor: PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.TO_DATE,
  },
]
