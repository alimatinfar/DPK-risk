import type {FormStepsTypes} from "../../../../../components/Form/FormSteps/index.types.ts";
import {lazy} from "react";

const AdminHighRiskFormStep1 = lazy(() => import(
  "../steps/step1/AdminHighRiskFormStep1.tsx"
  ))
const AdminHighRiskFormStep2 = lazy(() => import(
  "../steps/step2/AdminHighRiskFormStep2.tsx"
  ))
const AdminHighRiskFormStep3 = lazy(() => import(
  "../steps/step3/AdminHighRiskFormStep3.tsx"
  ))
const AdminHighRiskFormStep4 = lazy(() => import(
  "../steps/step4/AdminHighRiskFormStep4.tsx"
  ))
const AdminHighRiskFormStep5 = lazy(() => import(
  "../steps/step5/AdminHighRiskFormStep5.tsx"
  ))

export const ADMIN_HIGH_RISK_FORM_STEPS: FormStepsTypes[] = [
  {
    id: 1,
    text: 'ثبت اطلاعات نامه',
    children: <AdminHighRiskFormStep1/>,
  },
  {
    id: 2,
    text: 'افزودن مستندات نامه',
    children: <AdminHighRiskFormStep2/>,
  },
  {
    id: 3,
    text: 'افزودن اشخاص',
    children: <AdminHighRiskFormStep3/>,
  },
  {
    id: 4,
    text: 'افزودن مستندات اشخاص',
    children: <AdminHighRiskFormStep4/>,
  },
  {
    id: 5,
    text: 'پیش نمایش',
    children: <AdminHighRiskFormStep5/>,
  },
]
