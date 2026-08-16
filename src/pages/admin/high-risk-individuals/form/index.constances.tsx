import type {FormStepsTypes} from "../../../../components/Form/FormSteps/index.types.ts";
import {lazy} from "react";

const AdminHighRiskFormStep1 = lazy(() => import(
  "./steps/AdminHighRiskFormStep1.tsx"
  ))
const AdminHighRiskFormStep2 = lazy(() => import(
  "./steps/AdminHighRiskFormStep2.tsx"
  ))
const AdminHighRiskFormStep3 = lazy(() => import(
  "./steps/AdminHighRiskFormStep3.tsx"
  ))
const AdminHighRiskFormStep4 = lazy(() => import(
  "./steps/AdminHighRiskFormStep4.tsx"
  ))

export const ADMIN_HIGH_RISK_FORM_STEPS: FormStepsTypes[] = [
  {
    id: 1,
    text: 'اطلاعات اولیه و مستندات',
    children: <AdminHighRiskFormStep1/>,
  },
  {
    id: 2,
    text: 'افزودن اشخاص',
    children: <AdminHighRiskFormStep2/>,
  },
  {
    id: 3,
    text: 'افزودن مستندات اشخاص',
    children: <AdminHighRiskFormStep3/>,
  },
  {
    id: 4,
    text: 'پیش نمایش',
    children: <AdminHighRiskFormStep4/>,
  },
]
