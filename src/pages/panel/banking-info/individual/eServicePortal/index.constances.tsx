import type {TableColumnType} from "../../../../../components/others/Table/TableExports.ts";
import ACTIONS_COLUMN from "../../../../../components/others/Table/constances/actions/actionsColumn.ts";


export const PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS = {
  E_SERVICE_PORTAL: 'electronicServiceGateway',
  ACTIVATION_DATE: 'activationDate',
  STATUS: 'status',
  LAST_CHANGE_DATE: 'lastChangeDate',
} as const;

export const PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'درگاه خدمت الکترونیک',
    accessor: PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.E_SERVICE_PORTAL,
  },
  {
    label: 'تاریخ اولین فعالسازی',
    accessor: PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.ACTIVATION_DATE,
  },
  {
    label: 'وضعیت',
    accessor: PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.STATUS,
  },
  {
    label: 'تاریخ آخرین تغییر',
    accessor: PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.LAST_CHANGE_DATE,
  },
  ACTIONS_COLUMN
];
