import {
    createBrowserRouter, Navigate,
} from "react-router";
import ROUTER_LINKS from "../constances/routerLinks.ts";
import {lazy} from "react";
import GeneralLayout from "../layouts/GeneralLayout.tsx";
import getFirstPanelSideBarLink from "../pages/panel/layout/utils/getFirstPanelSideBarLink.ts";
import ErrorPage from "../components/svg/RenderLogic/ErrorStatePage.tsx";
import comprehensiveInfoRouter from "./comprehensiveInfoRouter.tsx";
import bankingInfoRouter from "./bankingInfoRouter.tsx";
import businessInteractionRiskRouter from "./businessInteractionRiskRouter.tsx";
import getFirstAdminSideBarLink from "../pages/admin/layout/utils/getFirstAdminSideBarLink.ts";


// const RemoteComponent = lazy(() => import('remoteApp/App'))
const HomePage = lazy(() => import("../pages/home/HomePage.tsx"));
const SearchPage = lazy(() => import("../pages/search/SearchPage.tsx"));
const SSOLoginPage = lazy(() => import("../pages/sso-login/SSOLoginPage"));

const PanelLayout = lazy(() => import("../pages/panel/layout/PanelLayout.tsx"));

//admin
const AdminLayout = lazy(() => import("../pages/admin/layout/AdminLayout.tsx"));
const AdminHighRiskIndividualPage = lazy(() => import("../pages/admin/high-risk-individual/AdminHighRiskIndividualPage.tsx"));



const router = createBrowserRouter(
  [
    {
      element: <GeneralLayout />,
      errorElement: <ErrorPage />,
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
          path: ROUTER_LINKS.SSO_LOGIN,
          element: <SSOLoginPage/>,
        },
        {
          element: <PanelLayout/>,
          children: [
            {
              path: ROUTER_LINKS.PANEL,
              element: <Navigate to={getFirstPanelSideBarLink()} />,
            },

            ...comprehensiveInfoRouter,

            ...bankingInfoRouter,

            ...businessInteractionRiskRouter,
          ]
        },
        {
          element: <AdminLayout/>,
          children: [
            {
              path: ROUTER_LINKS.ADMIN,
              element: <Navigate to={getFirstAdminSideBarLink()} />,
            },
            {
              path: ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL,
              element: <AdminHighRiskIndividualPage />,
            },
          ]
        },
      ]
    }
  ],
  {
    basename: import.meta.env.VITE_BASE_URL,
  }
);

export default router
