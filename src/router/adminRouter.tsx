import ROUTER_LINKS from "../constances/routerLinks.ts";
import {Navigate} from "react-router";
import getFirstAdminSideBarLink from "../pages/admin/layout/utils/getFirstAdminSideBarLink.ts";
import {lazy} from "react";

const AdminHighRiskIndividualsPage = lazy(() => import(
  "../pages/admin/high-risk-individuals/AdminHighRiskIndividualsPage.tsx"
  ))
const AdminHighRiskIndividualsLettersDetailPage = lazy(() => import(
  "../pages/admin/high-risk-individuals/letters/detail/AdminHighRiskIndividualsLettersDetailPage.tsx"
  ))


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
    path: `${ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER}/:id`,
    element: <AdminHighRiskIndividualsLettersDetailPage/>,
  },
]

export default adminRouter
