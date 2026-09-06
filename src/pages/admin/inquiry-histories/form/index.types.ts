import type {
  AdminHighRiskIndividualsBaseFormFieldsType
} from "../../high-risk-individuals/FormFields/AdminHighRiskIndividualsBaseFormFields/index.types.ts";
import type {AdminHighRiskIndividualsFormDataType} from "../../high-risk-individuals/form/index.types.ts";
import {
  requestReasonFieldName,
  type RequestReasonFieldType
} from "../FormFields/RequestReasonField/index.constances.ts";
import {
  responseSubmissionStatusFieldName,
  type ResponseSubmissionStatusFieldType
} from "../FormFields/ResponseSubmissionStatusField/index.constances.ts";


export type AdminInquiryHistoriesFormDataType = {
  step1: {
    [requestReasonFieldName]: RequestReasonFieldType;
    [responseSubmissionStatusFieldName]: ResponseSubmissionStatusFieldType;
  } & Omit<AdminHighRiskIndividualsBaseFormFieldsType, 'riskListType' | 'expireDate'>;
} & Omit<AdminHighRiskIndividualsFormDataType, 'step1'>
