import type { TableColumnType } from "../../../../components/others/Table/TableExports.ts";

export const PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS = {
  INCOME_SOURCE_TITLE: 'incomeSourceTitle',
  ANNUAL_INCOME_MAX: 'annualIncomeMax',
  TRANSACTION_ORIGIN_DEST: 'transactionOriginDest',
  ANNOUNCEMENT_DATE: 'announcementDate',
  FROM_DATE: 'fromDate',
  TO_DATE: 'toDate',
  REGISTRATION_DATE: 'registrationDate',
} as const;

export const PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'عنوان منبع درآمد',
    accessor:
    PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.INCOME_SOURCE_TITLE,
  },
  {
    label: 'حداکثر مبلغ درآمد سالیانه',
    accessor:
    PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.ANNUAL_INCOME_MAX,
  },
  {
    label: 'انواع مبدا و مقصد مورد انتظار تراکنش',
    accessor:
    PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.TRANSACTION_ORIGIN_DEST,
  },
  {
    label: 'تاریخ اعلام',
    accessor:
    PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.ANNOUNCEMENT_DATE,
  },
  {
    label: 'از تاریخ',
    accessor:
    PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.FROM_DATE,
  },
  {
    label: 'تا تاریخ',
    accessor:
    PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.TO_DATE,
  },
  {
    label: 'تاریخ ثبت',
    accessor:
    PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.REGISTRATION_DATE,
  },
];
