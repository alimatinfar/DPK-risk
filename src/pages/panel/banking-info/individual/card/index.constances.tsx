import type {TableColumnType} from "../../../../../components/others/Table/TableExports.ts";
import TABLE_RENDER_TYPES from "../../../../../components/others/Table/constances/renderTypes.ts";
import Tag from "../../../../../components/others/Tag/Tag.tsx";


export const PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS = {
  CARD_NUMBER: 'cardNumber',
  CARD_ACCOUNT_NUMBER: 'cardAccountNumber',
  CARD_STATUS: 'cardStatus',
  CARD_TYPE: 'cardType',
  ISSUE_DATE: 'issueDate',
  EXPIRY_DATE: 'expiryDate',
  ISSUE_BRANCH_CODE: 'issueBranchCode',
  ISSUE_BRANCH_NAME: 'issueBranchName',
  ISSUE_REGION_CODE: 'issueRegionCode',
  ISSUE_REGION_NAME: 'issueRegionName',
  ISSUER_PERSONNEL_CODE: 'issuerPersonnelCode',
  ISSUER_NAME: 'issuerName',
} as const;

export const PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره کارت',
    accessor: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS.CARD_NUMBER,
  },
  {
    label: 'شماره حساب کارت',
    accessor: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS.CARD_ACCOUNT_NUMBER,
  },
  {
    label: 'وضعیت کارت',
    accessor: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS.CARD_STATUS,
  },
  {
    label: 'نوع کارت',
    accessor: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS.CARD_TYPE,
  },
  {
    label: 'تاریخ صدور',
    accessor: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUE_DATE,
  },
  {
    label: 'تاریخ انقضا',
    accessor: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS.EXPIRY_DATE,
  },
  {
    label: 'کد شعبه صادرکننده',
    accessor: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUE_BRANCH_CODE,
  },
  {
    label: 'نام شعبه',
    accessor: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUE_BRANCH_NAME,
  },
  {
    label: 'کد منطقه صادرکننده',
    accessor: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUE_REGION_CODE,
  },
  {
    label: 'نام منطقه',
    accessor: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUE_REGION_NAME,
  },
  {
    label: 'کدپرسنلی صادرکننده',
    accessor: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUER_PERSONNEL_CODE,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN,
  },
  {
    label: 'نام و نام خانوادگی صادرکننده',
    accessor: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUER_NAME,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN,
  },
]
