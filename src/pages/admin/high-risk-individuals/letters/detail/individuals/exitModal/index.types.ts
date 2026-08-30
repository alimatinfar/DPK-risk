import {
  exitReasonTypeFieldName,
  type ExitReasonTypeFieldType
} from "../../../../FormFields/ExitReasonTypeField/index.constances.ts";
import {
  type DescriptionFieldType
} from "../../../../FormFields/DescriptionField/index.constances.ts";
import {exitByUserMistakeDescriptionFieldName, exitCitingTheLetterDescriptionFieldName} from "./index.constances.ts";
import {
  announceReferenceFieldName,
  type AnnounceReferenceFieldType
} from "../../../../FormFields/AnnouncingReferenceField/index.constances.ts";
import {
  letterNumberFieldName,
  type LetterNumberFieldType
} from "../../../../FormFields/LetterNumberField/index.constances.ts";
import {
  letterDateFieldName,
  type LetterDateFieldType
} from "../../../../FormFields/LetterDateField/index.constances.ts";

export type ExitCustomerFormDataType = {
  [exitReasonTypeFieldName]: ExitReasonTypeFieldType;
  [exitByUserMistakeDescriptionFieldName]: DescriptionFieldType;
  [announceReferenceFieldName]: AnnounceReferenceFieldType;
  [letterNumberFieldName]: LetterNumberFieldType;
  [letterDateFieldName]: LetterDateFieldType;
  [exitCitingTheLetterDescriptionFieldName]: DescriptionFieldType;
}
