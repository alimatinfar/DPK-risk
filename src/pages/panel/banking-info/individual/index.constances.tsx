import type {TabsProps} from "../../../../components/others/Tab/Tab.tsx";
import {lazy} from "react";
import TableSuspense from "../../../../components/others/RenderLogic/TableSuspense.tsx";
import PanelIndividualBankingInfoAccountLoading from "./account/PanelIndividualBankingInfoAccountLoading.tsx";
import PanelIndividualBankingInfoCardLoading from "./card/PanelIndividualBankingInfoCardLoading.tsx";
import PanelIndividualBankingInfoFacilitiesLoading from "./facilities/PanelIndividualBankingInfoFacilitiesLoading.tsx";
import PanelIndividualBankingInfoCommitmentsLoading
  from "./commitments/PanelIndividualBankingInfoCommitmentsLoading.tsx";


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
    <TableSuspense fallback={<PanelIndividualBankingInfoAccountLoading />}>
      <PanelIndividualBankingInfoAccount />
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.CARD]: (
    <TableSuspense fallback={<PanelIndividualBankingInfoCardLoading />}>
      <PanelIndividualBankingInfoCard />
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.FACILITIES]: (
    <TableSuspense fallback={<PanelIndividualBankingInfoFacilitiesLoading />}>
      <PanelIndividualBankingInfoFacilities />
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.COMMITMENTS]: (
    <TableSuspense fallback={<PanelIndividualBankingInfoCommitmentsLoading />}>
      <PanelIndividualBankingInfoCommitments />
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.E_SERVICE_PORTAL]: (
    <TableSuspense fallback={<div>salam</div>}>
      <PanelIndividualBankingInfoEServicePortal />
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.TRANSACTION_HISTORY]: (
    <TableSuspense fallback={<div>salam</div>}>
      <PanelIndividualBankingInfoTransactionHistory />
    </TableSuspense>
  ),
}
