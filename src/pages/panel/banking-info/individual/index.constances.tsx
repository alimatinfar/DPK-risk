import type {TabsProps} from "../../../../components/others/Tab/Tab.tsx";

export const PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS = {
  ACCOUNT: 'account',
  CARD: 'card',
  FACILITIES: 'facilities',
  COMMITMENTS: 'commitments',
  E_SERVICE_PORTAL: 'e-service-portal',
  TRANSACTION_HISTORY: 'transaction-history',
}

export const PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS: TabsProps['tabs'] = [
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT,
    title: 'حساب'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.CARD,
    title: 'کارت'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.FACILITIES,
    title: 'تسهیلات'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.COMMITMENTS,
    title: 'تعهدات'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.E_SERVICE_PORTAL,
    title: 'درگاه خدمات الکترونیک'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.TRANSACTION_HISTORY,
    title: 'سوابق تراکنش'
  },
]