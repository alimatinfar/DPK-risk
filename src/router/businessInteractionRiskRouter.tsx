import ROUTER_LINKS from "../constances/routerLinks.ts";
import {lazy} from "react";

const DevelopingSection = lazy(() => import("../components/others/RenderLogic/DevelopingSection.tsx"));

const businessInteractionRiskRouter = [
  {
    path: ROUTER_LINKS.PANEL_CUSTOMER_RISK,
    element: <DevelopingSection />,
  },
  {
    path: ROUTER_LINKS.PANEL_SERVICE_HISTORY_RISK,
    element: <DevelopingSection />,
  },
  {
    path: ROUTER_LINKS.PANEL_REGIONAL_RISK,
    element: <DevelopingSection />,
  },
]

export default businessInteractionRiskRouter
