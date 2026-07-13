import {PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS} from "../individual/index.constances.tsx";
import {lazy} from "react";
import TableSuspense from "../../../../components/others/RenderLogic/TableSuspense.tsx";
import PanelJointBankingInfoAccountLoading from "./account/PanelJointBankingInfoAccountLoading.tsx";
import PanelJointBankingInfoCardLoading from "./card/PanelJointBankingInfoCardLoading.tsx";
import PanelJointBankingInfoFacilitiesLoading from "./facilities/PanelJointBankingInfoFacilitiesLoading.tsx";
import PanelJointBankingInfoCommitmentsLoading from "./commitments/PanelJointBankingInfoCommitmentsLoading.tsx";

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
    <TableSuspense fallback={<PanelJointBankingInfoAccountLoading />}>
      <PanelJointBankingInfoAccount/>
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.CARD]: (
    <TableSuspense fallback={<PanelJointBankingInfoCardLoading />}>
      <PanelJointBankingInfoCard/>
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.FACILITIES]: (
    <TableSuspense fallback={<PanelJointBankingInfoFacilitiesLoading />}>
      <PanelJointBankingInfoFacilities/>
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.COMMITMENTS]: (
    <TableSuspense fallback={<PanelJointBankingInfoCommitmentsLoading />}>
      <PanelJointBankingInfoCommitments/>
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.E_SERVICE_PORTAL]: (
    <TableSuspense fallback={<div>salam</div>}>
      <PanelJointBankingInfoEServicePortal/>
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.TRANSACTION_HISTORY]: (
    <TableSuspense fallback={<div>salam</div>}>
      <PanelJointBankingInfoTransactionHistory/>
    </TableSuspense>
  ),
}
