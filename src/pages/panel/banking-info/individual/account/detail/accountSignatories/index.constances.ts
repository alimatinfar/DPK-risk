import type {TableColumnType} from "../../../../../../../components/others/Table/TableExports.ts";


export const PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABS_KEYS = {
  BENEFICIARIES: 'beneficiaries',
  GUARANTORS: 'guarantors',
}

export const PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS = {
  CUSTOMER_NUMBER: 'customerNumber',
  CUSTOMER_TYPE: 'customerType',
  NAME: 'name',
  NATIONAL_ID: 'nationalId',
} as const;

export const PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره مشتری',
    accessor: PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER,
  },
  {
    label: 'نوع مشتری',
    accessor: PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS.CUSTOMER_TYPE,
  },
  {
    label: 'نام و نام خانوادگی / نام شرکت',
    accessor: PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS.NAME,
  },
  {
    label: 'کدملی / شناسه فراگیر اتباع / شناسه ملی',
    accessor: PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS.NATIONAL_ID,
  },
]
