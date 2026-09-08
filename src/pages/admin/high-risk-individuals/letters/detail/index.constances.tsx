import type {TabsProps} from "../../../../../components/others/Tab/Tab.tsx";
import {lazy} from "react";
import type {
  AdminHighRiskIndividualsLettersDetailPageProps,
} from "./index.types.ts";

const AdminHighRiskIndividualsLettersDetailDocuments = lazy(() => import(
  "./documents/AdminHighRiskIndividualsLettersDetailDocuments.tsx"
  ))
const AdminHighRiskIndividualsLettersDetailIndividuals = lazy(() => import(
  "./individuals/AdminHighRiskIndividualsLettersDetailIndividuals.tsx"
  ))

export const ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS = {
  DOCUMENTS: 'documents',
  INDIVIDUALS: 'individuals',
}

export const ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS: TabsProps['tabs'] = [
  {
    id: ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS.DOCUMENTS,
    title: 'توضیحات و مستندات'
  },
  {
    id: ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS.INDIVIDUALS,
    title: 'اشخاص'
  },
]

export const ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_RENDER_OBJECT = (
  {responseData}: AdminHighRiskIndividualsLettersDetailPageProps
) => ({
  [ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS.DOCUMENTS]: (
    <AdminHighRiskIndividualsLettersDetailDocuments responseData={responseData} />
  ),
  [ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS.INDIVIDUALS]: (
    <AdminHighRiskIndividualsLettersDetailIndividuals responseData={responseData} />
  ),
})
