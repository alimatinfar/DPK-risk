export type PanelTransactionHistoryPeriodObjectType = {
  monthName: string;
  year: string | number;
  fromDate: string | number;
  toDate: string | number;
}

export type PanelTransactionHistoryOnSiteItemResponseType = {
  year: number;
  month: number;
  totalCount: number;
  totalCredit: number;
  totalDebit: number;
  totalCreditTotalDebit: number;
}
