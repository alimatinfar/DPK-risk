import type {AdminHighRiskIndividualsFormDataType} from "../index.types.ts";
import {announceReferenceFieldName} from "../../FormFields/AnnouncingReferenceField/index.constances.ts";
import {descriptionFieldName} from "../../FormFields/DescriptionField/index.constances.ts";
import {letterDateFieldName} from "../../FormFields/LetterDateField/index.constances.ts";
import {letterNumberFieldName} from "../../FormFields/LetterNumberField/index.constances.ts";

export const ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA: AdminHighRiskIndividualsFormDataType = {
  currentStep: 1,
  step1: {
    [announceReferenceFieldName]: '',
    [descriptionFieldName]: '',
    [letterDateFieldName]: '',
    [letterNumberFieldName]: ''
  },
  step2: {
    documentsList: []
  },
  step3: {
    individuals: []
  }
}
