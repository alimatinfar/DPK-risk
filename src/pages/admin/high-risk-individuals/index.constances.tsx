import type {TabsProps} from "../../../components/others/Tab/Tab.tsx";
import {lazy, Suspense} from "react";
import TableSuspense from "../../../components/others/RenderLogic/TableSuspense.tsx";
import AdminHighRiskIndividualsLettersTableLoading from "./letters/AdminHighRiskIndividualsLettersTableLoading.tsx";
import AdminHighRiskIndividualsCardsLoading from "./individuals/AdminHighRiskIndividualsCardsLoading.tsx";

const AdminHighRiskIndividualsLettersTable = lazy(() => import(
  "./letters/AdminHighRiskIndividualsLettersTable"
  ));
const AdminHighRiskIndividualsCards = lazy(() => import(
  "./individuals/AdminHighRiskIndividualsCards"
  ));


export const ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS = {
  LETTERS: 'letters',
  INDIVIDUALS: 'individuals',
}

export const ADMIN_HIGH_RISK_INDIVIDUALS_TABS: TabsProps['tabs'] = [
  {
    id: ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.LETTERS,
    title: 'نامه‌ها'
  },
  {
    id: ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.INDIVIDUALS,
    title: 'اشخاص'
  },
]

export const ADMIN_HIGH_RISK_INDIVIDUALS_TABS_RENDER_OBJECT = {
  [ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.LETTERS]: (
    <TableSuspense fallback={<AdminHighRiskIndividualsLettersTableLoading />}>
      <AdminHighRiskIndividualsLettersTable/>
    </TableSuspense>
  ),
  [ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.INDIVIDUALS]: (
    <Suspense fallback={<AdminHighRiskIndividualsCardsLoading/>}>
      <AdminHighRiskIndividualsCards/>
    </Suspense>
  ),
}
