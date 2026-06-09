import type {TableColumnType} from "../../../../../components/others/Table/TableExports.ts";
import TABLE_RENDER_TYPES from "../../../../../components/others/Table/constances/renderTypes.ts";
import ACTIONS_COLUMN from "../../../../../components/others/Table/constances/actions/actionsColumn.ts";


export const PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS = {
  ACCOUNT_NUMBER: 'accountNumber',
  ACCOUNT_STATUS: 'accountStatus',
  ACCOUNT_SUB_TYPE: 'accountSubType',
  SAYYAH_ID: 'sayyahId',
  OPEN_DATE: 'openDate',
  OPEN_PURPOSE: 'openPurpose',
  BUSINESS_TYPE: 'businessType',
  COMMERCIAL_DATE: 'commercialDate',
  OPEN_BRANCH_CODE: 'openBranchCode',
  OPEN_BRANCH_NAME: 'openBranchName',
  OPEN_REGION_CODE: 'openRegionCode',
  OPEN_REGION_NAME: 'openRegionName',
  OPENER_PERSONNEL_CODE: 'openerPersonnelCode',
  OPENER_NAME: 'openerName',
} as const;

export const PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_COMMON_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره حساب',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_NUMBER,
  },
  {
    label: 'وضعیت حساب',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_STATUS,
  },
  {
    label: 'زیر نوع حساب',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_SUB_TYPE,
  },
  {
    label: 'شناسه سیاح',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.SAYYAH_ID,
  },
  {
    label: 'تاریخ افتتاح',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_DATE,
  },
  {
    label: 'هدف افتتاح',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_PURPOSE,
  },
  {
    label: 'تجاری/غیرتجاری',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.BUSINESS_TYPE,
  },
  {
    label: 'تاریخ تجاری',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.COMMERCIAL_DATE,
  },
  {
    label: 'کد شعبه افتتاح',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_BRANCH_CODE,
  },
  {
    label: 'نام شعبه',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_BRANCH_NAME,
  },
  {
    label: 'کد منطقه افتتاح',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_REGION_CODE,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN
  },
  {
    label: 'نام منطقه',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_REGION_NAME,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN
  },
  {
    label: 'کدپرسنلی افتتاح کننده',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPENER_PERSONNEL_CODE,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN
  },
  {
    label: 'نام و نام خانوادگی افتتاح کننده',
    accessor: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPENER_NAME,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN
  },
];

export const PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS: TableColumnType[] = [
  ...PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_COMMON_TABLE_COLUMNS,
  ACTIONS_COLUMN
];
