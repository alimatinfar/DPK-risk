
const PANEL = '/panel'

const ROUTER_LINKS = {
  REMOTE: '/remote',

  SSO_LOGIN: '/auth/sso-login',

  HOME: '/',
  SEARCH: '/search',

  PANEL,
  PANEL_BASIC_INFORMATION: `${PANEL}/basic-information`,
  PANEL_INQUIRY_HISTORIES: `${PANEL}/inquiry-histories`,
  PANEL_ECONOMIC_INFORMATION: `${PANEL}/economic-information`,
  PANEL_LEGAL_REPRESENTATIVE_INFORMATION: `${PANEL}/legal-representative-information`,
  PANEL_INDIVIDUAL_BANKING_INFORMATION: `${PANEL}/individual-banking-information`,
  PANEL_JOINT_BANKING_INFORMATION: `${PANEL}/joint-banking-information`,
  PANEL_BANKING_INFORMATION_FOR_ACCOUNTS_WITH_WITHDRAWAL_CONDITIONS: `${PANEL}/banking-information-for-accounts-with-withdrawal-conditions`,
  PANEL_CUSTOMER_RISK: `${PANEL}/customer-risk`,
  PANEL_SERVICE_HISTORY_RISK: `${PANEL}/service-history-risk`,
  PANEL_REGIONAL_RISK: `${PANEL}/reginal-risk`,
}

export default ROUTER_LINKS