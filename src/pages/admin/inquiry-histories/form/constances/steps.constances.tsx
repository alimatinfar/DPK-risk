import type {FormStepsTypes} from "../../../../../components/Form/FormSteps/index.types.ts";
import {lazy} from "react";

const AdminInquiryHistoryFormStep1 = lazy(() => import(
  "../steps/step1/AdminInquiryHistoryFormStep1.tsx"
  ))
const AdminInquiryHistoryFormStep2 = lazy(() => import(
  "../steps/step2/AdminInquiryHistoryFormStep2.tsx"
  ))
const AdminInquiryHistoryFormStep3 = lazy(() => import(
  "../steps/step3/AdminInquiryHistoryFormStep3.tsx"
  ))
const AdminInquiryHistoryFormStep4 = lazy(() => import(
  "../steps/step4/AdminInquiryHistoryFormStep4"
  ))

export const ADMIN_INQUIRY_HISTORY_FORM_STEPS: FormStepsTypes[] = [
  {
    id: 1,
    text: 'ثبت اطلاعات نامه',
    children: <AdminInquiryHistoryFormStep1/>,
  },
  {
    id: 2,
    text: 'افزودن مستندات نامه',
    children: <AdminInquiryHistoryFormStep2/>,
  },
  {
    id: 3,
    text: 'افزودن اشخاص',
    children: <AdminInquiryHistoryFormStep3/>,
  },
  {
    id: 4,
    text: 'پیش نمایش',
    children: <AdminInquiryHistoryFormStep4/>,
  },
]
