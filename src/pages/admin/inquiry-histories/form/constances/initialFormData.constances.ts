import type {AdminInquiryHistoriesFormDataType} from "../index.types.ts";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA, ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA_STEP1_SHARE
} from "../../../high-risk-individuals/form/constances/initialFormData.constances.ts";
import {
  requestReasonFieldName,
} from "../../FormFields/RequestReasonField/index.constances.ts";
import {
  responseSubmissionStatusFieldName,
} from "../../FormFields/ResponseSubmissionStatusField/index.constances.ts";

export const ADMIN_INQUIRY_HISTORIES_FORM_INITIAL_DATA: AdminInquiryHistoriesFormDataType = {
  ...ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA,
  step1: {
   ...ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA_STEP1_SHARE,
    [requestReasonFieldName]: '',
    [responseSubmissionStatusFieldName]: '',
  },
}
