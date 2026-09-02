import {
  announceReferenceFieldName,
  type AnnounceReferenceFieldType
} from "../AnnouncingReferenceField/index.constances.ts";
import {letterNumberFieldName, type LetterNumberFieldType} from "../LetterNumberField/index.constances.ts";
import {letterDateFieldName, type LetterDateFieldType} from "../LetterDateField/index.constances.ts";
import {descriptionFieldName, type DescriptionFieldType} from "../DescriptionField/index.constances.ts";
import {riskListTypeFieldName, type RiskListTypeFieldType} from "../RiskListTypeField/index.constances.ts";
import {expireDateFieldName, type ExpireDateFieldType} from "../ExpireDateField/index.constances.ts";

export type AdminHighRiskIndividualsBaseFormFieldsType = {
  [announceReferenceFieldName]: AnnounceReferenceFieldType;
  [letterNumberFieldName]: LetterNumberFieldType;
  [letterDateFieldName]: LetterDateFieldType;
  [descriptionFieldName]: DescriptionFieldType;
  [riskListTypeFieldName]: RiskListTypeFieldType;
  [expireDateFieldName]: ExpireDateFieldType;
}
