import {lazy} from "react";
import ROUTER_LINKS from "../constances/routerLinks.ts";

const PanelIndividualBankingInfo = lazy(() => import("../pages/panel/banking-info/individual/PanelIndividualBankingInfo.tsx"));
const PanelIndividualBankingInfoAccountDetail = lazy(() => import("../pages/panel/banking-info/individual/account/detail/PanelIndividualBankingInfoAccountDetail"));
const PanelIndividualBankingInfoEServicePortalHistory = lazy(() => import("../pages/panel/banking-info/individual/eServicePortal/history/PanelIndividualBankingInfoEServicePortalHistory.tsx"));
const PanelIndividualBankingInfoCommitmentsDetail = lazy(() => import("../pages/panel/banking-info/individual/commitments/detail/PanelIndividualBankingInfoCommitmentsDetail.tsx"));
const PanelIndividualTransactionHistoryByPeriodDetail = lazy(() => import("../pages/panel/banking-info/individual/transactionHistory/periodDetail/PanelIndividualTransactionHistoryByPeriodDetail.tsx"));
const PanelIndividualTransactionHistoryByBranchDetail = lazy(() => import("../pages/panel/banking-info/individual/transactionHistory/branchDetail/PanelIndividualTransactionHistoryByBranchDetail.tsx"));
const PanelIndividualTransactionHistoryEServiceDetail = lazy(() => import("../pages/panel/banking-info/individual/transactionHistory/eService/detail/PanelIndividualTransactionHistoryEServiceDetail.tsx"));
const PanelIndividualTransactionHistoryEServicePeriodDetail = lazy(() => import("../pages/panel/banking-info/individual/transactionHistory/eService/periodDetail/PanelIndividualTransactionHistoryEServicePeriodDetail.tsx"));


const individualBankingInfoRouter = [
  {
    path: ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION,
    element: <PanelIndividualBankingInfo />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_ACCOUNT}/:id`,
    element: <PanelIndividualBankingInfoAccountDetail />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_E_SERVICE_PORTAL}/:id`,
    element: <PanelIndividualBankingInfoEServicePortalHistory />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY}/:periodId`,
    element: <PanelIndividualTransactionHistoryByPeriodDetail />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY}/:periodId/:branchId`,
    element: <PanelIndividualTransactionHistoryByBranchDetail />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_E_SERVICE}/:eServiceId`,
    element: <PanelIndividualTransactionHistoryEServiceDetail />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_E_SERVICE}/:eServiceId/:periodId`,
    element: <PanelIndividualTransactionHistoryEServicePeriodDetail />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_COMMITMENTS}/:id`,
    element: <PanelIndividualBankingInfoCommitmentsDetail />,
  },
]

export default individualBankingInfoRouter
