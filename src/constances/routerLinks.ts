
const PANEL = '/panel'
const COMPREHENSIVE_INFO = `${PANEL}/comprehensive-info`

const ROUTER_LINKS = {
  REMOTE: '/remote',

  HOME: '/',
  SEARCH: '/search',

  PANEL,

  PANEL_BASIC_INFORMATION: `${COMPREHENSIVE_INFO}/basic-information`,
  PANEL_INQUIRY_HISTORIES: `${COMPREHENSIVE_INFO}/inquiry-histories`,
  PANEL_ECONOMIC_INFORMATION: `${COMPREHENSIVE_INFO}/economic-information`,
  PANEL_LEGAL_REPRESENTATIVE_INFORMATION: `${COMPREHENSIVE_INFO}/legal-representative-information`,
  PANEL_INDIVIDUAL_BANKING_INFORMATION: `${COMPREHENSIVE_INFO}/individual-banking-information`,
  PANEL_JOINT_BANKING_INFORMATION: `${COMPREHENSIVE_INFO}/joint-banking-information`,
  PANEL_BANKING_INFORMATION_FOR_ACCOUNTS_WITH_WITHDRAWAL_CONDITIONS: `${COMPREHENSIVE_INFO}/banking-information-for-accounts-with-withdrawal-conditions`,
  PANEL_CUSTOMER_RISK: `${COMPREHENSIVE_INFO}/customer-risk`,
  PANEL_SERVICE_HISTORY_RISK: `${COMPREHENSIVE_INFO}/service-history-risk`,
  PANEL_REGIONAL_RISK: `${COMPREHENSIVE_INFO}/reginal-risk`,

  PANEL_: `${COMPREHENSIVE_INFO}/reginal-risk`,
}

export default ROUTER_LINKS