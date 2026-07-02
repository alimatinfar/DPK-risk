import individualBankingInfoRouter from "./individualBankingInfoRouter.tsx";
import jointBankingInfoRouter from "./jointBankingInfoRouter.tsx";
import ROUTER_LINKS from "../constances/routerLinks.ts";
import {lazy} from "react";

const PanelBankingInfoWithWithdrawalConditions = lazy(() => import("../pages/panel/banking-info/with-withdrawal-conditions/PanelBankingInfoWithWithdrawalConditions.tsx"));

const bankingInfoRouter = [
  ...individualBankingInfoRouter,
  ...jointBankingInfoRouter,
  {
    path: ROUTER_LINKS.PANEL_BANKING_INFORMATION_FOR_ACCOUNTS_WITH_WITHDRAWAL_CONDITIONS,
    element: <PanelBankingInfoWithWithdrawalConditions />,
  },
]

export default bankingInfoRouter
