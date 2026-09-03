const apiUrl1 = 'ExternalService/GetMaxTransactionHistory'
const params1 = '?fromDate=14050201&toDate=14050301&accountNumber=03013392900004'
type ResponseType1 = {
  totalCount: number;
  totalCredit: number;
  totalDebit: number;
  totalCreditTotalDebit: number;
}[]



//////////
const apiUrl2 = 'ExternalService/GetMaxCountTransactionHistoryBranchInfo'
const params2 = '?fromDate=14050201&toDate=14050301&accountNumber=03013392900004'
type ResponseType2 = {
  totalCount: number;
  totalCredit: number;
  totalDebit: number;
  totalCreditTotalDebit: number;
  branchCode: number;
  branchName: string;
  areaCode: string;
  areaName: string;
  branchRisk: number;
}[]


//////////
const apiUrl3 = 'ExternalService/GetMaxAmountTransactionHistoryBranchInfo'
const params3 = '?fromDate=14050201&toDate=14050301&accountNumber=03013392900004'
type ResponseType3 = {
  totalCount: number;
  totalCredit: number;
  totalDebit: number;
  totalCreditTotalDebit: number;
  branchCode: number;
  branchName: string;
  areaCode: string;
  areaName: string;
  branchRisk: number;
}[]



//////////
const apiUrl4 = 'Service/GetMaxTransactionHistory'
const params4 = '?fromDate=14050201&toDate=14050431&customerId=420919698'
type ResponseType4 = {
  year: number;
  month: number;
  totalCount: number;
  totalCredit: number;
  totalDebit: number;
}[]



//////////
const apiUrl5 = 'Service/GetMaxCountTransactionHistoryBranchInfo'
const params5 = '?fromDate=14050201&toDate=14050431&customerId=420919698'
type ResponseType5 = {
  totalCount: number;
  totalCredit: number;
  totalDebit: number;
  branchCode: number;
  branchName: string;
  areaCode: string;
  areaName: string;
  branchRisk: number;
}[]


//////////
const apiUrl6 = 'Service/GetMaxAmountTransactionHistoryBranchInfo'
const params6 = '?fromDate=14050201&toDate=14050431&customerId=420919698'
type ResponseType6 = {
  totalCount: number;
  totalCredit: number;
  totalDebit: number;
  branchCode: number;
  branchName: string;
  areaCode: string;
  areaName: string;
  branchRisk: number;
}[]
