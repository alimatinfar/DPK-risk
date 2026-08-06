import type {TableColumnType} from "../../../components/others/Table/TableExports.ts";
import ACTIONS_COLUMN from "../../../components/others/Table/constances/actions/actionsColumn.ts";

export const ADMIN_HIGH_RISK_INDIVIDUAL_TABLE_COLUMNS_KEYS = {
  LETTER_NUMBER: 'letterNumber',
  ANNOUNCER_REFERENCE: 'announcerReference',
  LETTER_DATE: 'letterDate',
} as const;

export const ADMIN_HIGH_RISK_INDIVIDUAL_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره نامه',
    accessor: ADMIN_HIGH_RISK_INDIVIDUAL_TABLE_COLUMNS_KEYS.LETTER_NUMBER,
  },
  {
    label: 'مرجع اعلام کننده',
    accessor: ADMIN_HIGH_RISK_INDIVIDUAL_TABLE_COLUMNS_KEYS.ANNOUNCER_REFERENCE,
  },
  {
    label: 'تاریخ نامه',
    accessor: ADMIN_HIGH_RISK_INDIVIDUAL_TABLE_COLUMNS_KEYS.LETTER_DATE,
  },
  ACTIONS_COLUMN
];
