import ROUTER_LINKS from "../constances/routerLinks.ts";
import {lazy} from "react";

const PanelBasicInformationPage = lazy(() => import("../pages/panel/comprehensive-info/basic-information/PanelBasicInformationPage.tsx"));
const PanelInquiryHistoriesPage = lazy(() => import("../pages/panel/comprehensive-info/inquiry-histories/PanelInquiryHistoriesPage.tsx"));
const PanelEconomicInformationPage = lazy(() => import("../pages/panel/comprehensive-info/economic-information/PanelEconomicInformationPage.tsx"));
const PanelLegalRepresentativeInformationPage = lazy(() => import("../pages/panel/comprehensive-info/legal-representative-information/PanelLegalRepresentativeInformationPage.tsx"));


const comprehensiveInfoRouter = [
  {
    path: ROUTER_LINKS.PANEL_BASIC_INFORMATION,
    element: <PanelBasicInformationPage />,
  },
  {
    path: ROUTER_LINKS.PANEL_INQUIRY_HISTORIES,
    element: <PanelInquiryHistoriesPage />,
  },
  {
    path: ROUTER_LINKS.PANEL_ECONOMIC_INFORMATION,
    element: <PanelEconomicInformationPage />,
  },
  {
    path: ROUTER_LINKS.PANEL_LEGAL_REPRESENTATIVE_INFORMATION,
    element: <PanelLegalRepresentativeInformationPage />,
  },
]

export default comprehensiveInfoRouter
