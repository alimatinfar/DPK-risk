import type {TableColumnType} from "../../../../../../components/others/Table/TableExports.ts";
import Tag from "../../../../../../components/others/Tag/Tag.tsx";

export const PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS = {
  DATE: 'date',
  STATUS: 'status',
  DESCRIPTION: 'description',
} as const;

export const PANEL_INDIVIDUAL_STATUS_HISTORY_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'تاریخ',
    accessor: PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS.DATE,
  },
  {
    label: 'وضعیت',
    accessor: PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS.STATUS,
  },
  {
    label: 'توضیحات',
    accessor: PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS.DESCRIPTION,
  },
]
