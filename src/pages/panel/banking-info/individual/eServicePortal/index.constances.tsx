import type {TableColumnType} from "../../../../../components/others/Table/TableExports.ts";
import Tag from "../../../../../components/others/Tag/Tag.tsx";
import type {SelectOptionType} from "../../../../../components/Form/Select/select-exports.ts";
import ACTIONS_COLUMN from "../../../../../components/others/Table/constances/actions/actionsColumn.ts";


export const PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS = {
  E_SERVICE_PORTAL: 'electronicServiceGateway',
  ACTIVATION_DATE: 'activationDate',
  STATUS: 'status',
  LAST_ACTIVITY_DATE: 'lastActivityDate',
  DEACTIVATION_DATE: 'deactivationDate',
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
    label: 'تاریخ آخرین فعالیت',
    accessor: PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.LAST_ACTIVITY_DATE,
  },
  {
    label: 'تاریخ آخرین غیرفعالسازی/جمع‌آوری',
    accessor: PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.DEACTIVATION_DATE,
  },
  ACTIONS_COLUMN
];

export const PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_FAKE_DATA = [
  {
    id: 1,
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.E_SERVICE_PORTAL]: 'اینترنت بانک',
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.ACTIVATION_DATE]: '1401/03/15',
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.STATUS]: (
      <Tag text='فعال' color='green' variant='fade'/>
    ),
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.LAST_ACTIVITY_DATE]: '1403/02/10',
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.DEACTIVATION_DATE]: '-',
  },
  {
    id: 2,
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.E_SERVICE_PORTAL]: 'موبایل بانک',
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.ACTIVATION_DATE]: '1400/08/01',
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.STATUS]: (
      <Tag text='غیرفعال' color='red' variant='fade'/>
    ),
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.LAST_ACTIVITY_DATE]: '1402/11/22',
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.DEACTIVATION_DATE]: '1403/01/05',
  },
];
