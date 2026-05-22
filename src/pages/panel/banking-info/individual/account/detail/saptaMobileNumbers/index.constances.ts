import type {TableColumnType} from "../../../../../../../components/others/Table/TableExports.ts";

export const INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS = {
  MOBILE_NUMBER: 'mobileNumber',
  OWNER_TYPE: 'ownerType',
  NAME: 'name',
  NATIONAL_ID: 'nationalId',
} as const;

export const INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره موبایل',
    accessor: INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS.MOBILE_NUMBER,
  },
  {
    label: 'نوع صاحب موبایل',
    accessor: INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS.OWNER_TYPE,
  },
  {
    label: 'نام و نام خانوادگی / نام شرکت',
    accessor: INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS.NAME,
  },
  {
    label: 'کد ملی / شناسه فراگیر اتباع / شناسه ملی',
    accessor: INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS.NATIONAL_ID,
  },
]
