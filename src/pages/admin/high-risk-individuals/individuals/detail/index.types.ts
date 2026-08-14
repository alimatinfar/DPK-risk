import {
  letterNumberFieldName,
  type LetterNumberFieldType
} from "../../FormFields/LetterNumberField/index.constances.ts";
import {
  announceReferenceFieldName,
  type AnnounceReferenceFieldType
} from "../../FormFields/AnnouncingReferenceField/index.constances.ts";
import {letterDateFieldName, type LetterDateFieldType} from "../../FormFields/LetterDateField/index.constances.ts";
import {descriptionFieldName, type DescriptionFieldType} from "../../FormFields/DescriptionField/index.constances.ts";
import {expireDateFieldName, type ExpireDateFieldType} from "../../FormFields/ExpireDateField/index.constances.ts";
import {
  entryReasonsFieldName,
  type EntryReasonsFieldType
} from "../../FormFields/EntryReasonsField/index.constances.ts";
import {EXIT_PERSON_FROM_LETTER_KEYS} from "../../letters/detail/individuals/index.constances.ts";


type ShareLetterType = {
  id: number | string;
  [letterNumberFieldName]: string | number;
  [announceReferenceFieldName]: string;
  [letterDateFieldName]: string;
  [descriptionFieldName]: string;
}

export type AdminHighRiskIndividualRelatedLetterType = {
  [expireDateFieldName]: string;
  [entryReasonsFieldName]: string[];
  exitType?: typeof EXIT_PERSON_FROM_LETTER_KEYS[keyof typeof EXIT_PERSON_FROM_LETTER_KEYS]
  exitLetter?: ShareLetterType
} & ShareLetterType
