const url = 'Service/GetTransactionAggregateByPort?codedargah=1&fromDate=14040201&toDate=14050431&customerId=420919698'


type ResponseType = {
  year: number;
  month: number;
  totalCount: number;
  totalCredit: number;
  totalDebit: number;
  totalCreditTotalDebit: number;
}


///////////////


const url2 = 'Service/GetMaxTransactionHistoryBranchInfoDetail?fromDate=14050201&toDate=14050231&branchCode=1042&customerId=420919698'


type ResponseType2 = {
  totalCredit: number;
  totalDebit: number;
  totalCreditTotalDebit: number;
  branchCode: number;
  branchName: string;
  areaCode: string;
  areaName: string;
  operationType: string;
  transactionDate: number;
  bankPersonnelCode: string;
  firstName: string;
  lastName: string;
}


///////////////


const url3 = 'Service/GetTransactionAggregateByPortAndInvoice?codedargah=1&fromDate=14040201&toDate=14050431&customerId=420919698'


type ResponseType3 = {
  operationType: string;
  totalCredit: number;
  totalDebit: number;
  totalCreditTotalDebit: number;
  transactionDate: number;
}


///////////////


