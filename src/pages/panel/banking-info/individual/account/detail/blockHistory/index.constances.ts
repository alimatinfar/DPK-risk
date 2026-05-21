import type {TableColumnType} from "../../../../../../../components/others/Table/TableExports.ts";

export const INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS_KEYS = {
  BLOCK_AMOUNT: 'blockAmount',
  BLOCK_APPLY_DATE: 'blockApplyDate',
  BLOCK_REMOVE_DATE: 'blockRemoveDate',
  REASON_CODE: 'reasonCode',
  BLOCK_REASON_DESCRIPTION: 'blockReasonDescription',
} as const;

export const INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'مبلغ مسدودی',
    accessor: INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS_KEYS.BLOCK_AMOUNT,
  },
  {
    label: 'تاریخ اعمال مسدودی',
    accessor: INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS_KEYS.BLOCK_APPLY_DATE,
  },
  {
    label: 'تاریخ رفع مسدودی',
    accessor: INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS_KEYS.BLOCK_REMOVE_DATE,
  },
  {
    label: 'کد علت',
    accessor: INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS_KEYS.REASON_CODE,
  },
  {
    label: 'شرح علت مسدودی',
    accessor: INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS_KEYS.BLOCK_REASON_DESCRIPTION,
  },
]
