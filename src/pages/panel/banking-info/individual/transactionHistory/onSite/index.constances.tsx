import type {TableColumnType} from "../../../../../../components/others/Table/TableExports.ts";
import ACTIONS_COLUMN from "../../../../../../components/others/Table/constances/actions/actionsColumn.ts";
import getLast13Months from "../../../../../../utils/dateAndTIme/momentJalaliDateTime/getLast13Months.ts";

export const PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS = {
  MONTH: 'month',
  VISIT_COUNT: 'totalCount',
  TOTAL_CREDITOR: 'totalCredit',
  TOTAL_DEBTOR: 'totalDebit',
  BALANCE: 'totalCreditTotalDebit',
} as const;

export const PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'بازه زمانی مراجعه حضوری',
    accessor: PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.MONTH,
  },
  {
    label: 'تعداد مراجعه',
    accessor: PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.VISIT_COUNT,
  },
  {
    label: 'مجموع بستانکار',
    accessor: PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.TOTAL_CREDITOR,
  },
  {
    label: 'مجموع بدهکار',
    accessor: PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.TOTAL_DEBTOR,
  },
  {
    label: 'مجموع بستانکار - مجموع بدهکار',
    accessor: PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.BALANCE,
  },
  ACTIONS_COLUMN
];

export const PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_FAKE_DATA = getLast13Months().map((item, index) => ({
  id: index + 1,
  year: 1405,
  [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.MONTH]: 6,
  [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.VISIT_COUNT]: 12,
  [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.TOTAL_CREDITOR]: '850,000,000',
  [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.TOTAL_DEBTOR]: '420,000,000',
  [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.BALANCE]: '430,000,000',
}))
