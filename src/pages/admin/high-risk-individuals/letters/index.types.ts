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

export type AdminHighRiskIndividualsLettersFilterType = {
  [letterNumberFieldName]: LetterNumberFieldType;
  [announceReferenceFieldName]: AnnounceReferenceFieldType;
  [letterFromDateFieldName]: LetterFromDateFieldType;
  [letterToDateFieldName]: LetterToDateFieldType;
}
