
const APIS = {
  // search page
  GET_CUSTOMERS: 'Customer/GetCustomers',

  // primary information
  GET_LEGAL_TYPES: 'PrimaryInformation/GetLegalType',
  GET_NATIONALITIES: 'PrimaryInformation/GetNationality',
  GET_LETTER_REFERENCES: 'PrimaryInformation/GetLetterRef',

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

  //authentication
  GET_TOKEN_DATA: 'Account/GetTokenData',

  //admin
  ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMERS: 'RiskCustomer/GetRiskCustomers',
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS: 'RiskCustomer/GetRiskLetters',
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DETAIL: 'RiskCustomer/GetRiskLetter',
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DELETE_DOCUMENT: 'RiskCustomer/DeleteRiskLetterDocument',
}

export default APIS;
