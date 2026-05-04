import {
    createBrowserRouter, Navigate,
} from "react-router";
import ROUTER_LINKS from "../constances/routerLinks.ts";
import {lazy} from "react";
import GeneralLayout from "../layouts/GeneralLayout.tsx";
import getFirstSideBarLink from "../pages/panel/layout/utils/getFirstSideBarLink.ts";

// const RemoteComponent = lazy(() => import('remoteApp/App'))
const HomePage = lazy(() => import("../pages/home/HomePage.tsx"));
const SearchPage = lazy(() => import("../pages/search/SearchPage.tsx"));

const PanelLayout = lazy(() => import("../pages/panel/layout/PanelLayout.tsx"));
const PanelBasicInformationPage = lazy(() => import("../pages/panel/basic-information/PanelBasicInformationPage.tsx"));
const PanelInquiryHistoriesPage = lazy(() => import("../pages/panel/inquiry-histories/PanelInquiryHistoriesPage.tsx"));
const PanelEconomicInformationPage = lazy(() => import("../pages/panel/economic-information/PanelEconomicInformationPage.tsx"));
const PanelLegalRepresentativeInformationPage = lazy(() => import("../pages/panel/legal-representative-information/PanelLegalRepresentativeInformationPage.tsx"));
const DevelopingSection = lazy(() => import("../components/others/RenderLogic/DevelopingSection.tsx"));


const router = createBrowserRouter(
  [
    {
      element: <GeneralLayout />,
      children: [
        {
          path: ROUTER_LINKS.HOME,
          element: <HomePage/>,
        },
        {
          path: ROUTER_LINKS.SEARCH,
          element: <SearchPage/>,
        },
        {
          element: <PanelLayout/>,
          children: [
            {
              path: ROUTER_LINKS.PANEL,
              element:<Navigate to={getFirstSideBarLink()} />,
            },
            {
              path: ROUTER_LINKS.PANEL_BASIC_INFORMATION,
              element:<PanelBasicInformationPage />,
            },
            {
              path: ROUTER_LINKS.PANEL_INQUIRY_HISTORIES,
              element:<PanelInquiryHistoriesPage />,
            },
            {
              path: ROUTER_LINKS.PANEL_ECONOMIC_INFORMATION,
              element:<PanelEconomicInformationPage />,
            },
            {
              path: ROUTER_LINKS.PANEL_LEGAL_REPRESENTATIVE_INFORMATION,
              element:<PanelLegalRepresentativeInformationPage />,
            },
            {
              path: ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION,
              element:<DevelopingSection />,
            },
            {
              path: ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION,
              element:<DevelopingSection />,
            },
            {
              path: ROUTER_LINKS.PANEL_BANKING_INFORMATION_FOR_ACCOUNTS_WITH_WITHDRAWAL_CONDITIONS,
              element:<DevelopingSection />,
            },
            {
              path: ROUTER_LINKS.PANEL_CUSTOMER_RISK,
              element:<DevelopingSection />,
            },
            {
              path: ROUTER_LINKS.PANEL_SERVICE_HISTORY_RISK,
              element:<DevelopingSection />,
            },
            {
              path: ROUTER_LINKS.PANEL_REGIONAL_RISK,
              element:<DevelopingSection />,
            },
          ]
        },

        // {
        //   path: ROUTER_LINKS.REMOTE,
        //   element: <RemoteComponent/>,
        // },
      ]
    }
  ],
  {
    basename: import.meta.env.VITE_BASE_URL,
  }
);

export default router