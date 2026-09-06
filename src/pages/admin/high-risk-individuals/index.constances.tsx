import type {TabsProps} from "../../../components/others/Tab/Tab.tsx";
import {lazy, Suspense} from "react";
import TableSuspense from "../../../components/others/RenderLogic/TableSuspense.tsx";
import AdminHighRiskIndividualsLettersTableLoading from "./letters/AdminHighRiskIndividualsLettersTableLoading.tsx";
import AdminHighRiskIndividualsCardsLoading from "./individuals/AdminHighRiskIndividualsCardsLoading.tsx";
import type {UseFilterReturnProps} from "../../../components/Form/FilterForm/hooks/useFilter.ts";


const AdminHighRiskIndividualsFilter = lazy(() => import(
  "./individuals/AdminHighRiskIndividualsFilter.tsx"
  ));
const AdminHighRiskIndividualsLettersFilter = lazy(() => import(
  "./letters/AdminHighRiskIndividualsLettersFilter.tsx"
  ));

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
    id: ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.INDIVIDUALS,
    title: 'اشخاص'
  },
  {
    id: ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.LETTERS,
    title: 'نامه‌ها'
  },
]

export const ADMIN_HIGH_RISK_INDIVIDUALS_FILTERS_TABS_RENDER_OBJECT = (props: Pick<UseFilterReturnProps<any>, 'filters' | 'setFilters'>) => ({
  [ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.LETTERS]: (
    <AdminHighRiskIndividualsLettersFilter {...props} />
  ),
  [ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.INDIVIDUALS]: (
    <AdminHighRiskIndividualsFilter {...props} />
  ),
})

export const ADMIN_HIGH_RISK_INDIVIDUALS_TABS_RENDER_OBJECT = (props: Pick<UseFilterReturnProps<any>, 'filters' | 'setCurrentPage' | 'setRowsPerPage'>) => ({
  [ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.LETTERS]: (
    <TableSuspense fallback={<AdminHighRiskIndividualsLettersTableLoading/>}>
      <AdminHighRiskIndividualsLettersTable {...props} />
    </TableSuspense>
  ),
  [ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.INDIVIDUALS]: (
    <Suspense fallback={<AdminHighRiskIndividualsCardsLoading/>}>
      <AdminHighRiskIndividualsCards {...props} />
    </Suspense>
  ),
})
