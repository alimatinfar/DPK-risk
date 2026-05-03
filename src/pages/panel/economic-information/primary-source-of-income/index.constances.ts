import type {TableColumnType} from "../../../../components/others/Table/TableExports.ts";

export const PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS = {
  ANNUAL_DEPOSIT_MAX: 'annualDepositMax',
  ANNUAL_WITHDRAWAL_MAX: 'annualWithdrawalMax',
  PER_TRANSACTION_MAX: 'perTransactionMax',
  MAIN_INCOME_MAX: 'mainIncomeMax',
  TRANSACTION_ORIGIN_DEST: 'transactionOriginDest',
  ANNOUNCEMENT_DATE: 'announcementDate',
  FROM_DATE: 'fromDate',
  TO_DATE: 'toDate',
  REGISTRATION_DATE: 'registrationDate',
} as const;

export const PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'پیش بینی حداکثر مبلغ واریزی سالیانه',
    accessor: PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.ANNUAL_DEPOSIT_MAX,
  },
  {
    label: 'پیش بینی حداکثر مبلغ برداشت سالیانه',
    accessor: PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.ANNUAL_WITHDRAWAL_MAX,
  },
  {
    label: 'پیش بینی حداکثر مبلغ هر تراکنش',
    accessor: PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.PER_TRANSACTION_MAX,
  },
  {
    label: 'حداکثر مبلغ درآمد از کسب و کار اصلی',
    accessor: PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.MAIN_INCOME_MAX,
  },
  {
    label: 'انواع مبدا و مقصد مورد انتظار تراکنش',
    accessor: PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.TRANSACTION_ORIGIN_DEST,
  },
  {
    label: 'تاریخ اعلام',
    accessor: PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.ANNOUNCEMENT_DATE,
  },
  {
    label: 'از تاریخ',
    accessor: PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.FROM_DATE,
  },
  {
    label: 'تا تاریخ',
    accessor: PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.TO_DATE,
  },
  {
    label: 'تاریخ ثبت',
    accessor: PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.REGISTRATION_DATE,
  },
];