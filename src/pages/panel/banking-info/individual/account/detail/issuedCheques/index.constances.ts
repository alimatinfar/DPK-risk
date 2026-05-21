import type {TableColumnType} from "../../../../../../../components/others/Table/TableExports.ts";


export const INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS_KEYS = {
  CHECK_NUMBER: 'checkNumber',
  CHECK_AMOUNT: 'checkAmount',
  CHECK_DATE: 'checkDate',
} as const;

export const INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره چک',
    accessor: INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS_KEYS.CHECK_NUMBER,
  },
  {
    label: 'مبلغ چک',
    accessor: INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS_KEYS.CHECK_AMOUNT,
  },
  {
    label: 'تاریخ چک',
    accessor: INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS_KEYS.CHECK_DATE,
  },
]
