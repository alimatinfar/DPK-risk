export type PanelTransactionHistoryPeriodObjectType = {
  monthName: string;
  fromDate: string | number;
  toDate: string | number;
  isCurrentMonth: boolean;
}

export type PanelTransactionHistoryOnSiteItemResponseType = {
  year: number;
  month: number;
  totalCount: number;
  totalCredit: number;
  totalDebit: number;
  totalCreditTotalDebit: number;
}
