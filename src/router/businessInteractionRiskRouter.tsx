import ROUTER_LINKS from "../constances/routerLinks.ts";
import {lazy} from "react";

const PanelCustomerRiskPage = lazy(() => import(
  "../pages/panel/customer-risk/PanelCustomerRiskPage.tsx"
  ));

const businessInteractionRiskRouter = [
  {
    path: ROUTER_LINKS.PANEL_CUSTOMER_RISK,
    element: <PanelCustomerRiskPage/>,
  },
]

export default businessInteractionRiskRouter
