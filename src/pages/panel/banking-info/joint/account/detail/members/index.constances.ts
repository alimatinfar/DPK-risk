import type {TableColumnType} from "../../../../../../../components/others/Table/TableExports.ts";
import TABLE_RENDER_TYPES from "../../../../../../../components/others/Table/constances/renderTypes.ts";

export const JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS = {
  CUSTOMER_NUMBER: 'customerNumber',
  CUSTOMER_TYPE: 'customerType',
  NATIONALITY: 'nationality',
  NAME: 'name',
  IDENTIFICATION_CODE: 'identificationCode',
  SHEHAB_ID: 'shehabId',
  LAST_CUSTOMER_UPDATE_DATE: 'lastCustomerUpdateDate',
  CUSTOMER_BRANCH_CODE: 'customerBranchCode',
  BRANCH_NAME: 'branchName',
  CUSTOMER_REGION_CODE: 'customerRegionCode',
  REGION_NAME: 'regionName',
} as const;

export const JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره مشتری',
    accessor: JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER,
  },
  {
    label: 'نوع مشتری',
    accessor: JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.CUSTOMER_TYPE,
  },
  {
    label: 'ملیت',
    accessor: JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.NATIONALITY,
  },
  {
    label: 'نام و نام خانوادگی / نام شرکت',
    accessor: JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.NAME,
  },
  {
    label: 'کدملی / شناسه فراگیر اتباع / شناسه ملی',
    accessor: JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.IDENTIFICATION_CODE,
  },
  {
    label: 'شناسه شهاب',
    accessor: JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.SHEHAB_ID,
  },
  {
    label: 'تاریخ آخرین تغییرات تعریف مشتری',
    accessor: JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.LAST_CUSTOMER_UPDATE_DATE,
  },
  {
    label: 'کدشعبه تعریف مشتری',
    accessor: JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.CUSTOMER_BRANCH_CODE,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN
  },
  {
    label: 'نام شعبه',
    accessor: JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.BRANCH_NAME,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN
  },
  {
    label: 'کد منطقه تعریف مشتری',
    accessor: JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.CUSTOMER_REGION_CODE,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN
  },
  {
    label: 'نام منطقه',
    accessor: JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.REGION_NAME,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN
  },
]
