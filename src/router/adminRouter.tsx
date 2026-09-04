import ROUTER_LINKS from "../constances/routerLinks.ts";
import {Navigate} from "react-router";
import getFirstAdminSideBarLink from "../pages/admin/layout/utils/getFirstAdminSideBarLink.ts";
import {lazy} from "react";

const AdminHighRiskIndividualsPage = lazy(() => import(
  "../pages/admin/high-risk-individuals/AdminHighRiskIndividualsPage.tsx"
  ))
const AdminHighRiskIndividualsFormPage = lazy(() => import(
  "../pages/admin/high-risk-individuals/form/AdminHighRiskIndividualsFormPage.tsx"
  ))
const AdminHighRiskIndividualsLettersDetailPage = lazy(() => import(
  "../pages/admin/high-risk-individuals/letters/detail/AdminHighRiskIndividualsLettersDetailPage.tsx"
  ))
const AdminHighRiskIndividualsDetailPage = lazy(() => import(
  "../pages/admin/high-risk-individuals/individuals/detail/AdminHighRiskIndividualsDetailPage.tsx"
  ))
const AdminInquiryHistories = lazy(() => import(
  "../pages/admin/inquiry-histories/AdminInquiryHistories.tsx"
  ));


const adminRouter = [
  {
    path: ROUTER_LINKS.ADMIN,
    element: <Navigate to={getFirstAdminSideBarLink()}/>,
  },
  {
    path: ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL,
    element: <AdminHighRiskIndividualsPage/>,
  },
  {
    path: ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL_FORM,
    element: <AdminHighRiskIndividualsFormPage/>,
  },
  {
    path: `${ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL}/:id`,
    element: <AdminHighRiskIndividualsDetailPage/>,
  },
  {
    path: `${ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER}/:id`,
    element: <AdminHighRiskIndividualsLettersDetailPage/>,
  },

  {
    path: ROUTER_LINKS.ADMIN_INQUIRY_HISTORIES,
    element: <AdminInquiryHistories/>,
  },
]

export default adminRouter
