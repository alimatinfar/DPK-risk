import {
    createBrowserRouter, Navigate,
} from "react-router";
import ROUTER_LINKS from "../constances/routerLinks.ts";
import {lazy} from "react";
import GeneralLayout from "../layouts/GeneralLayout.tsx";
import {SIDEBAR_ITEMS} from "../pages/panel/layout/PanelLayout.constances.ts";
import getFirstSideBarLink from "../pages/panel/layout/utils/getFirstSideBarLink.ts";

// const RemoteComponent = lazy(() => import('remoteApp/App'))
const HomePage = lazy(() => import("../pages/home/HomePage.tsx"));
const SearchPage = lazy(() => import("../pages/search/SearchPage.tsx"));

const PanelLayout = lazy(() => import("../pages/panel/layout/PanelLayout.tsx"));
const PanelBasicInformationPage = lazy(() => import("../pages/panel/basic-information/PanelBasicInformationPage.tsx"));
const PanelInquiryHistoriesPage = lazy(() => import("../pages/panel/inquiry-histories/PanelInquiryHistoriesPage.tsx"));
const PanelEconomicInformationPage = lazy(() => import("../pages/panel/economic-information/PanelEconomicInformationPage.tsx"));
const PanelLegalRepresentativeInformationPage = lazy(() => import("../pages/panel/legal-representative-information/PanelLegalRepresentativeInformationPage.tsx"));


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