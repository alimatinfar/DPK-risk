import type {TabsProps} from "../../../../components/others/Tab/Tab.tsx";
import {lazy} from "react";

const PanelIndividualBankingInfoAccount = lazy(() => import(
  "./account/PanelIndividualBankingInfoAccount.tsx"
  ))
const PanelIndividualBankingInfoCard = lazy(() => import(
  "./card/PanelIndividualBankingInfoCard.tsx"
  ))
const PanelIndividualBankingInfoFacilities = lazy(() => import(
  "./facilities/PanelIndividualBankingInfoFacilities.tsx"
  ))
const PanelIndividualBankingInfoCommitments = lazy(() => import(
  "./commitments/PanelIndividualBankingInfoCommitments.tsx"
  ))
const PanelIndividualBankingInfoEServicePortal = lazy(() => import(
  "./eServicePortal/PanelIndividualBankingInfoEServicePortal.tsx"
  ))
const PanelIndividualBankingInfoTransactionHistory = lazy(() => import(
  "./transactionHistory/PanelIndividualBankingInfoTransactionHistory.tsx"
  ))


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

export const PANEL_INDIVIDUAL_BANKING_INFO_PAGE_RENDER_OBJECT = {
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT]: (
    <PanelIndividualBankingInfoAccount />
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.CARD]: (
    <PanelIndividualBankingInfoCard />
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.FACILITIES]: (
    <PanelIndividualBankingInfoFacilities />
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.COMMITMENTS]: (
    <PanelIndividualBankingInfoCommitments />
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.E_SERVICE_PORTAL]: (
    <PanelIndividualBankingInfoEServicePortal />
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.TRANSACTION_HISTORY]: (
    <PanelIndividualBankingInfoTransactionHistory />
  ),
}
