import {letterNumberFieldName, type LetterNumberFieldType} from "../FormFields/LetterNumberField/index.constances.ts";
import {
  announceReferenceFieldName,
  type AnnounceReferenceFieldType
} from "../FormFields/AnnouncingReferenceField/index.constances.ts";
import {
  letterFromDateFieldName,
  type LetterFromDateFieldType
} from "../FormFields/LetterFromDateField/index.constances.ts";
import {letterToDateFieldName, type LetterToDateFieldType} from "../FormFields/LetterToDateField/index.constances.ts";
import {riskListTypeFieldName, type RiskListTypeFieldType} from "../FormFields/RiskListTypeField/index.constances.ts";

export type AdminHighRiskIndividualsLettersFilterType = {
  [letterNumberFieldName]: LetterNumberFieldType;
  [announceReferenceFieldName]: AnnounceReferenceFieldType;
  [letterFromDateFieldName]: LetterFromDateFieldType;
  [letterToDateFieldName]: LetterToDateFieldType;
  [riskListTypeFieldName]: RiskListTypeFieldType;
}

export type AdminHighRiskIndividualsLettersResponseItemType = {
  baseRiskLetterId: number;
  description: string;
  documents: [];
  id: number;
  isOut: boolean;
  isOutValidityDate: boolean;
  letterDate: number;
  letterNo: string;
  letterRef: number;
  letterRefTitle: string;
  riskListType: number;
  riskListTypeTitle: string;
  validityDate: number;
}
