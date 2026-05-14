import {
    createBrowserRouter, Navigate,
} from "react-router";
import ROUTER_LINKS from "../constances/routerLinks.ts";
import {lazy} from "react";
import GeneralLayout from "../layouts/GeneralLayout.tsx";
import getFirstSideBarLink from "../pages/panel/layout/utils/getFirstSideBarLink.ts";
import ErrorPage from "../components/svg/RenderLogic/ErrorStatePage.tsx";


// const RemoteComponent = lazy(() => import('remoteApp/App'))
const HomePage = lazy(() => import("../pages/home/HomePage.tsx"));
const SearchPage = lazy(() => import("../pages/search/SearchPage.tsx"));

//comprehensive info
const PanelLayout = lazy(() => import("../pages/panel/layout/PanelLayout.tsx"));
const PanelBasicInformationPage = lazy(() => import("../pages/panel/comprehensive-info/basic-information/PanelBasicInformationPage.tsx"));
const PanelInquiryHistoriesPage = lazy(() => import("../pages/panel/comprehensive-info/inquiry-histories/PanelInquiryHistoriesPage.tsx"));
const PanelEconomicInformationPage = lazy(() => import("../pages/panel/comprehensive-info/economic-information/PanelEconomicInformationPage.tsx"));
const PanelLegalRepresentativeInformationPage = lazy(() => import("../pages/panel/comprehensive-info/legal-representative-information/PanelLegalRepresentativeInformationPage.tsx"));

//banking info
const PanelIndividualBankingInfo = lazy(() => import("../pages/panel/banking-info/individual/PanelIndividualBankingInfo.tsx"));
const PanelIndividualBankingInfoAccountDetail = lazy(() => import("../pages/panel/banking-info/individual/account/detail/PanelIndividualBankingInfoAccountDetail"));
const PanelIndividualBankingInfoCommitmentsDetail = lazy(() => import("../pages/panel/banking-info/individual/commitments/detail/PanelIndividualBankingInfoCommitmentsDetail.tsx"));

const PanelJointBankingInfo = lazy(() => import("../pages/panel/banking-info/joint/PanelJointBankingInfo.tsx"));
const PanelJointBankingInfoAccountDetail = lazy(() => import("../pages/panel/banking-info/joint/account/detail/PanelJointBankingInfoAccountDetail.tsx"));
const PanelJointBankingInfoCommitmentsDetail = lazy(() => import("../pages/panel/banking-info/joint/commitments/detail/PanelJointBankingInfoCommitmentsDetail.tsx"));

const PanelBankingInfoWithWithdrawalConditions = lazy(() => import("../pages/panel/banking-info/with-withdrawal-conditions/PanelBankingInfoWithWithdrawalConditions.tsx"));

const DevelopingSection = lazy(() => import("../components/others/RenderLogic/DevelopingSection.tsx"));


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
              element:<PanelIndividualBankingInfo />,
            },
            {
              path: `${ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_ACCOUNT}/:id`,
              element:<PanelIndividualBankingInfoAccountDetail />,
            },
            {
              path: `${ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_COMMITMENTS}/:id`,
              element:<PanelIndividualBankingInfoCommitmentsDetail />,
            },

            {
              path: ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION,
              element:<PanelJointBankingInfo />,
            },
            {
              path: `${ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_ACCOUNT}/:id`,
              element:<PanelJointBankingInfoAccountDetail />,
            },
            {
              path: `${ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_COMMITMENTS}/:id`,
              element:<PanelJointBankingInfoCommitmentsDetail />,
            },

            {
              path: ROUTER_LINKS.PANEL_BANKING_INFORMATION_FOR_ACCOUNTS_WITH_WITHDRAWAL_CONDITIONS,
              element:<PanelBankingInfoWithWithdrawalConditions />,
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