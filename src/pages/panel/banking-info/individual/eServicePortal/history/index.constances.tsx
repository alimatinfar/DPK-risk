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
];

export const PANEL_INDIVIDUAL_STATUS_HISTORY_TABLE_FAKE_DATA = [
  {
    id: 1,
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS.DATE]: '1403/01/15',
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS.STATUS]: (
      <Tag text='فعال' color='green' variant='fade' />
    ),
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS.DESCRIPTION]:
      'حساب با موفقیت فعال شد.',
  },
  {
    id: 2,
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS.DATE]: '1403/03/10',
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS.STATUS]: (
      <Tag text='مسدود' color='red' variant='fade' />
    ),
    [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS.DESCRIPTION]:
      'به دلیل بررسی‌های امنیتی موقتاً مسدود شد.',
  },
];
