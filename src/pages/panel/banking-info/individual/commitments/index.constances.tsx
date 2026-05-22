import type {TableColumnType} from "../../../../../components/others/Table/TableExports.ts";
import TABLE_RENDER_TYPES from "../../../../../components/others/Table/constances/renderTypes.ts";
import Tag from "../../../../../components/others/Tag/Tag.tsx";
import ACTIONS_COLUMN from "../../../../../components/others/Table/constances/actionsColumn.ts";

export const PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS = {
  INDIRECT_COMMITMENT: 'indirectCommitment',
  COMMITMENT_NUMBER: 'commitmentNumber',
  PRINCIPAL_AMOUNT: 'principalAmount',
  TOTAL_AMOUNT: 'totalAmount',
  INTEREST_RATE: 'interestRate',
  COMMITMENT_TYPE: 'commitmentType',
  STATUS: 'status',
  CENTRAL_BANK_CONTRACT_NUMBER: 'centralBankContractNumber',
  ALLOCATION_DATE: 'allocationDate',
  END_DATE: 'endDate',
  BRANCH_CODE: 'branchCode',
  BRANCH_NAME: 'branchName',
  REGION_NAME: 'regionName',
} as const;

export const PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'مستقیم/غیرمستقیم',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.INDIRECT_COMMITMENT,
  },
  {
    label: 'شماره تعهدات',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.COMMITMENT_NUMBER,
  },
  {
    label: 'مبلغ اصل تعهدات',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.PRINCIPAL_AMOUNT,
  },
  {
    label: 'مبلغ کل تعهدات',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.TOTAL_AMOUNT,
  },
  {
    label: 'نرخ سود',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.INTEREST_RATE,
  },
  {
    label: 'نوع تعهدات',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.COMMITMENT_TYPE,
  },
  {
    label: 'وضعیت',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.STATUS,
  },
  {
    label: 'شماره قرارداد بانک مرکزی',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.CENTRAL_BANK_CONTRACT_NUMBER,
  },
  {
    label: 'تاریخ تخصیص',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.ALLOCATION_DATE,
  },
  {
    label: 'تاریخ پایان',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.END_DATE,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN,
  },
  {
    label: 'کدشعبه تعهدات',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.BRANCH_CODE,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN,
  },
  {
    label: 'نام شعبه تعهدات',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.BRANCH_NAME,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN,
  },
  {
    label: 'نام منطقه',
    accessor: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.REGION_NAME,
    renderType: TABLE_RENDER_TYPES.EXTRA_COLUMN,
  },
  ACTIONS_COLUMN,
]

export const INDIRECT_COMMITMENT_KEYS = {
  true: 'غیر مستقیم',
  false: 'مستقیم',
}
