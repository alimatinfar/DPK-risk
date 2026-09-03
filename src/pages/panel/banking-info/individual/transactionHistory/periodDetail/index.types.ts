import {PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS} from "./index.constances.tsx";

export type TransactionHistoryBranchObjectType = {
  [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BRANCH_CODE]: string | number;
  [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BRANCH_NAME]: string | number;
  [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.REGION_CODE]: string | number;
  [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.REGION_NAME]: string | number;
}

export type TransactionHistoryBranchItemResponseType = {
  totalCount: number;
  totalCredit: number;
  totalDebit: number;
  totalCreditTotalDebit: number;
  branchCode: number;
  branchName: string;
  areaCode: string;
  areaName: string;
  branchRisk: number;
}
