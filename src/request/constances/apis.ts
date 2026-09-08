
const APIS = {
  // search page
  GET_CUSTOMERS: 'Customer/GetCustomers',

  // primary information
  GET_LEGAL_TYPES: 'PrimaryInformation/GetLegalType',
  GET_NATIONALITIES: 'PrimaryInformation/GetNationality',
  GET_LETTER_REFERENCES: 'PrimaryInformation/GetLetterRef',
  GET_LETTER_DOCUMENTS: 'PrimaryInformation/GetDocumentType',
  GET_LETTER_REASONS: 'PrimaryInformation/GetRiskReson',
  GET_RISK_LIST_TYPES: 'PrimaryInformation/GetRiskListType',

  //comprehensive-info
  GET_NATURAL_CUSTOMER_INFO: 'Customer/GetCustomerInfo',
  GET_FOREIGN_CITIZEN_CUSTOMER_INFO: 'Customer/GetNonCitizenCustomerInfo',
  GET_LEGAL_CUSTOMER_INFO: 'Customer/GetLegalCustomerInfo',
  GET_NATURAL_CUSTOMER_INFO_BY_HISTORY_ID: 'Customer/GetCustomerInfoById',
  GET_FOREIGN_CITIZEN_CUSTOMER_INFO_BY_HISTORY_ID: 'Customer/GetNonCitizenCustomerInfoById',
  GET_LEGAL_CUSTOMER_INFO_BY_HISTORY_ID: 'Customer/GetLegalCustomerInfoById',
  GET_NATURAL_CUSTOMER_HISTORY: 'Customer/GetCustomerHistory',
  GET_FOREIGN_CITIZEN_CUSTOMER_HISTORY: 'Customer/GetNonCitizenCustomerHistory',
  GET_LEGAL_CUSTOMER_HISTORY: 'Customer/GetLegalCustomerHistory',
  GET_MAIN_INCOME_INFO: 'Customer/GetMainIncomeInfo',
  GET_SECONDARY_INCOME_INFO: 'Customer/GetSecondaryIncomeInfo',
  GET_ECONOMIC_ACTIVITY_INFO_NATURAL: 'Customer/GetEconomicActivityInfo',
  GET_ECONOMIC_ACTIVITY_INFO_LEGAL: 'Customer/GetLegalEconomicInfo',
  GET_BOARD_MEMBERS_INFO: 'Customer/GetBoardMembersInfo',
  GET_STATUTORY_AUDITOR_INFO: 'Customer/GetForensicAuditorInfo',
  GET_LEGAL_INSPECTOR_INFO: 'Customer/GetLegalInspectorInfo',
  GET_LEGAL_REPRESENTATIVE_INFO: 'Customer/GetLegalRepresentativeInfo',
  GET_MAJOR_OWNERS_INFO: 'Customer/GetOwnersOfCapitalInfo',
  GET_SHAREHOLDERS_INFO: 'Customer/GetShareHoldersInfo',
  GET_SHARE_CUSTOMER_IDS: 'Customer/GetShareCustomerIds',

  //banking-info
  BANK_INFO_GET_CUSTOMER_ACCOUNTS: 'BankInfo/GetCustomerAccounts',
  BANK_INFO_GET_CUSTOMER_SHARE_ACCOUNTS: 'BankInfo/GetCustomerShareAccounts',
  BANK_INFO_GET_CUSTOMER_CARDS: 'BankInfo/GetCustomerCards',
  BANK_INFO_GET_CUSTOMER_SHARE_CARDS: 'BankInfo/GetCustomerShareCards',
  BANK_INFO_GET_CUSTOMER_FACILITIES: 'BankInfo/GetCustomerFacilities',
  BANK_INFO_GET_CUSTOMER_SHARE_FACILITIES: 'BankInfo/GetCustomerShareFacilities',
  BANK_INFO_GET_CUSTOMER_OBLIGATIONS: 'BankInfo/GetCustomerObligations',
  BANK_INFO_GET_CUSTOMER_SHARE_OBLIGATIONS: 'BankInfo/GetCustomerShareObligations',
  BANK_INFO_GET_CUSTOMER_OBLIGATIONS_BENEFICIARY: 'BankInfo/GetCustomerObligationsBeneficiary',
  BANK_INFO_GET_CUSTOMER_OBLIGATIONS_GUARANTORS: 'BankInfo/GetCustomerObligationsGuarantor',
  BANK_INFO_GET_ACCOUNT_CHEQUES: 'BankInfo/GetAccountCheqs',
  BANK_INFO_GET_ACCOUNT_SHARE_MEMBERS: 'Customer/GetShareCustomerInfo',
  BANK_INFO_GET_ACCOUNT_RETURN_CHEQUES: 'BankInfo/GetAccountReturnCheqs',
  BANK_INFO_GET_ACCOUNT_SPECIAL_INSTRUCTIONS: 'BankInfo/GetAccountSpecialInstructions',
  BANK_INFO_GET_ACCOUNT_SIGNATORS: 'BankInfo/GetAccountSignatories',
  BANK_INFO_GET_ACCOUNT_BLOCKED_HISTORY: 'BankInfo/GetAccountBlockedHistory',
  BANK_INFO_GET_ACCOUNT_SAPTA_MOBILE: 'BankInfo/GetAccountSaptaMobile',
  BANK_INFO_GET_ACCOUNT_TURNOVER: 'BankInfo/GetAccountTurnover',
  BANK_INFO_GET_SPECIAL_CONDITIONS_ACCOUNTS: 'BankInfo/GetSpecialConditionsAccounts',
  BANK_INFO_GET_SPECIAL_CONDITIONS_CARDS: 'BankInfo/GetSpecialConditionsCards',
  BANK_INFO_GET_MAX_TRANSACTION_HISTORY: 'ExternalService/GetMaxTransactionHistory',
  BANK_INFO_GET_MAX_COUNT_TRANSACTION_HISTORY_BRANCH_INFO: 'ExternalService/GetMaxCountTransactionHistoryBranchInfo',
  BANK_INFO_GET_MAX_AMOUNT_TRANSACTION_HISTORY_BRANCH_INFO: 'ExternalService/GetMaxAmountTransactionHistoryBranchInfo',
  BANK_INFO_GET_TRANSACTION_HISTORY_BRANCH_DETAIL_INFO: 'ExternalService/GetMaxTransactionHistoryBranchInfoDetail',
  BANK_INFO_GET_TRANSACTION_AGGREGATE_BY_PORT: 'ExternalService/GetTransactionAggregateByPort',
  BANK_INFO_GET_TRANSACTION_AGGREGATE_BY_PORT_AND_INVOICE: 'ExternalService/GetTransactionAggregateByPortAndInvoice',

  //authentication
  GET_TOKEN_DATA: 'Account/GetTokenData',

  //admin
  ADMIN_HIGH_RISK_INDIVIDUAL_ADD_CUSTOMER: 'RiskCustomer/InsertRiskCustomers',
  ADMIN_HIGH_RISK_INDIVIDUAL_EXIST_LETTER: 'RiskCustomer/ExistLetter',
  ADMIN_HIGH_RISK_INDIVIDUAL_EXIST_CUSTOMER: 'RiskCustomer/ExistRiskCustomers',
  ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMERS: 'RiskCustomer/GetRiskCustomers',
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS: 'RiskCustomer/GetRiskLetters',
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DETAIL: 'RiskCustomer/GetRiskLetter',
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DETAIL_ALL_DATA: 'RiskCustomer/GetRiskLetterInfo',
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DETAIL_CUSTOMERS: 'RiskCustomer/GetRiskCustomersLetter',
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DELETE_DOCUMENT: 'RiskCustomer/DeleteRiskLetterDocument',
  ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_DELETE_DOCUMENT: 'RiskCustomer/DeleteRiskCustomerDocument',
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_ADD_DOCUMENT: 'RiskCustomer/InsertRiskLetterDocument',
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_EDIT_DOCUMENT: '',
  ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_EDIT_DOCUMENT: '',
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_GET_DOCUMENTS: 'RiskCustomer/GetRiskLetterDocuments',
  ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_GET_DOCUMENTS: 'RiskCustomer/GetRiskCustomerDocuments',
  ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_UPDATE: 'RiskCustomer/UpdateRiskCustomer',
  ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_EXIT_BY_USER_MISTAKE: 'RiskCustomer/InsertOutRiskCustomerDueToUserError',
  ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_EXIT_BY_LETTER: 'RiskCustomer/InsertOutRiskCustomer',
  ADMIN_HIGH_RISK_INDIVIDUAL_UPLOAD_EXCEL_CUSTOMERS: '',

  ADMIN_INQUIRY_HISTORIES: ''
}

export default APIS;
