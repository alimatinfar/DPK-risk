import type {AdminHighRiskIndividualsFormDataType} from "../index.types.ts";
import {announceReferenceFieldName} from "../../FormFields/AnnouncingReferenceField/index.constances.ts";
import {descriptionFieldName} from "../../FormFields/DescriptionField/index.constances.ts";
import {letterDateFieldName} from "../../FormFields/LetterDateField/index.constances.ts";
import {letterNumberFieldName} from "../../FormFields/LetterNumberField/index.constances.ts";
import {
  riskListTypeFieldName,
  type RiskListTypeFieldType
} from "../../FormFields/RiskListTypeField/index.constances.ts";
import {expireDateFieldName, type ExpireDateFieldType} from "../../FormFields/ExpireDateField/index.constances.ts";


export const ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA_STEP1_SHARE = {
  [announceReferenceFieldName]: '',
  [descriptionFieldName]: '',
  [letterDateFieldName]: '',
  [letterNumberFieldName]: '',
} as const

export const ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA: AdminHighRiskIndividualsFormDataType = {
  formIsDirty: false,
  currentStep: 1,
  step1: {
    ...ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA_STEP1_SHARE,
    [riskListTypeFieldName]: '',
    [expireDateFieldName]: undefined,
  },
  step2: {
    documentsList: []
  },
  step3: {
    individuals: []
  },
  // step4: {
  //   individualsExtraData: []
  // }
}
