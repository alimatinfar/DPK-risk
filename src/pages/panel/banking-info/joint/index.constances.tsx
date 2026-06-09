import {PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS} from "../individual/index.constances.tsx";
import {lazy} from "react";

const PanelJointBankingInfoAccount = lazy(() => import(
  "./account/PanelJointBankingInfoAccount.tsx"
  ))
const PanelJointBankingInfoCard = lazy(() => import(
  "./card/PanelJointBankingInfoCard.tsx"
  ))
const PanelJointBankingInfoFacilities = lazy(() => import(
  "./facilities/PanelJointBankingInfoFacilities.tsx"
  ))
const PanelJointBankingInfoCommitments = lazy(() => import(
  "./commitments/PanelJointBankingInfoCommitments.tsx"
  ))
const PanelJointBankingInfoEServicePortal = lazy(() => import(
  "./eServicePortal/PanelJointBankingInfoEServicePortal.tsx"
  ))
const PanelJointBankingInfoTransactionHistory = lazy(() => import(
  "./transactionHistory/PanelJointBankingInfoTransactionHistory.tsx"
  ))

export const PANEL_JOINT_BANKING_INFO_RENDER_OBJECT = {
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT]: (
    <PanelJointBankingInfoAccount />
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.CARD]: (
    <PanelJointBankingInfoCard />
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.FACILITIES]: (
    <PanelJointBankingInfoFacilities />
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.COMMITMENTS]: (
    <PanelJointBankingInfoCommitments />
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.E_SERVICE_PORTAL]: (
    <PanelJointBankingInfoEServicePortal />
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.TRANSACTION_HISTORY]: (
    <PanelJointBankingInfoTransactionHistory />
  ),
}
