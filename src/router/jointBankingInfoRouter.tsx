import ROUTER_LINKS from "../constances/routerLinks.ts";
import {lazy} from "react";

const PanelJointBankingInfo = lazy(() => import("../pages/panel/banking-info/joint/PanelJointBankingInfo.tsx"));
const PanelJointBankingInfoAccountDetail = lazy(() => import("../pages/panel/banking-info/joint/account/detail/PanelJointBankingInfoAccountDetail.tsx"));
const PanelJointBankingInfoEServicePortalHistory = lazy(() => import("../pages/panel/banking-info/joint/eServicePortal/history/PanelJointBankingInfoEServicePortalHistory.tsx"));
const PanelJointBankingInfoCommitmentsDetail = lazy(() => import("../pages/panel/banking-info/joint/commitments/detail/PanelJointBankingInfoCommitmentsDetail.tsx"));
const PanelJointTransactionHistoryByPeriodDetail = lazy(() => import("../pages/panel/banking-info/joint/transactionHistory/periodDetail/PanelJointTransactionHistoryByPeriodDetail.tsx"));
const PanelJointTransactionHistoryByBranchDetail = lazy(() => import("../pages/panel/banking-info/joint/transactionHistory/branchDetail/PanelJointTransactionHistoryByBranchDetail.tsx"));
const PanelJointTransactionHistoryEServiceDetail = lazy(() => import("../pages/panel/banking-info/joint/transactionHistory/eService/detail/PanelJointTransactionHistoryEServiceDetail.tsx"));
const PanelJointTransactionHistoryEServicePeriodDetail = lazy(() => import("../pages/panel/banking-info/joint/transactionHistory/eService/periodDetail/PanelJointTransactionHistoryEServicePeriodDetail.tsx"));


const jointBankingInfoRouter = [
  {
    path: ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION,
    element: <PanelJointBankingInfo />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_ACCOUNT}/:id`,
    element: <PanelJointBankingInfoAccountDetail />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_E_SERVICE_PORTAL}/:id`,
    element: <PanelJointBankingInfoEServicePortalHistory />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_TRANSACTION_HISTORY}/:periodId`,
    element: <PanelJointTransactionHistoryByPeriodDetail />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_TRANSACTION_HISTORY}/:periodId/:branchId`,
    element: <PanelJointTransactionHistoryByBranchDetail />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_TRANSACTION_HISTORY_E_SERVICE}/:eServiceId`,
    element: <PanelJointTransactionHistoryEServiceDetail />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_TRANSACTION_HISTORY_E_SERVICE}/:eServiceId/:periodId`,
    element: <PanelJointTransactionHistoryEServicePeriodDetail />,
  },
  {
    path: `${ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_COMMITMENTS}/:id`,
    element: <PanelJointBankingInfoCommitmentsDetail />,
  },
]

export default jointBankingInfoRouter
