
export type IndividualBankingAccountDetailTransactionInformationResponseType = {
  accountNumber: number;
  accountNumberStr: string;
  totalCredit: number;
  totalDebit: number;
  totalCreditTotalDebit: number;
  fromDate: number;
  toDate: number;
  periodId: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}[]
