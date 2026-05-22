import type {TableColumnType} from "../../../../../../../components/others/Table/TableExports.ts";

export const INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS = {
  TRANSACTION_PERIOD: 'transactionPeriod',
  TOTAL_CREDIT: 'totalCredit',
  TOTAL_DEBIT: 'totalDebit',
  BALANCE_DIFFERENCE: 'balanceDifference',
  FROM_DATE: 'fromDate',
  TO_DATE: 'toDate',
} as const;

export const INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'بازه زمانی گردش حساب',
    accessor: INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS.TRANSACTION_PERIOD,
  },
  {
    label: 'مجموع بستانکار',
    accessor: INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS.TOTAL_CREDIT,
  },
  {
    label: 'مجموع بدهکار',
    accessor: INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS.TOTAL_DEBIT,
  },
  {
    label: 'مجموع بستانکار - مجموع بدهکار',
    accessor: INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS.BALANCE_DIFFERENCE,
  },
  {
    label: 'از تاریخ',
    accessor: INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS.FROM_DATE,
  },
  {
    label: 'تا تاریخ',
    accessor: INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS.TO_DATE,
  },
]

export const PERIOD_ID_LABELS = {
  1: 'سه ماهه',
  2: 'شش ماهه',
  3: 'نه ماهه',
  4: 'یک ساله',
  5: 'دو ساله',
  6: 'سه ساله',
  7: 'چهار ساله',
  8: 'پنج ساله',
}
