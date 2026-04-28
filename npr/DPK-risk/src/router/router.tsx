import {
  createBrowserRouter,
} from "react-router";
import ROUTER_LINKS from "../constances/routerLinks.ts";
import {lazy} from "react";
import GeneralLayout from "../layouts/GeneralLayout.tsx";

// const RemoteComponent = lazy(() => import('remoteApp/App'))
const HomePage = lazy(() => import("../pages/home/HomePage.tsx"));
const SearchPage = lazy(() => import("../pages/search/SearchPage.tsx"));

const PanelLayout = lazy(() => import("../pages/panel/PanelLayout.tsx"));
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
          path: ROUTER_LINKS.PANEL,
          element: <PanelLayout/>,
          children: [
            {
              path: ROUTER_LINKS.PANEL,
              element:<PanelBasicInformationPage />,
            },
            {
              path: ROUTER_LINKS.PANEL,
              element:<PanelBasicInformationPage />,
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