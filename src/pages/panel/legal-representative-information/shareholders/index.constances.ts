import type { TableColumnType } from "../../../../components/others/Table/TableExports.ts";


export const PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS = {
  CUSTOMER_NUMBER: 'customerNumber',
  PERSON_TYPE: 'personType',
  NATIONALITY: 'nationality',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  NATIONAL_CODE_OR_FOREIGN_ID: 'nationalCodeOrForeignId',
  COMPANY_OR_INSTITUTE_NAME: 'companyOrInstituteName',
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
    label: 'نام',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.FIRST_NAME,
  },
  {
    label: 'نام خانوادگی',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.LAST_NAME,
  },
  {
    label: 'کدملی/شناسه فراگیر اتباع',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NATIONAL_CODE_OR_FOREIGN_ID,
  },
  {
    label: 'نام شرکت/موسسه',
    accessor: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.COMPANY_OR_INSTITUTE_NAME,
  },
  {
    label: 'شناسه ملی',
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
