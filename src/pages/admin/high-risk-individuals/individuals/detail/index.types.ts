import {
  letterNumberFieldName
} from "../../FormFields/LetterNumberField/index.constances.ts";
import {
  announceReferenceFieldName
} from "../../FormFields/AnnouncingReferenceField/index.constances.ts";
import {letterDateFieldName} from "../../FormFields/LetterDateField/index.constances.ts";
import {descriptionFieldName} from "../../FormFields/DescriptionField/index.constances.ts";
import {expireDateFieldName} from "../../FormFields/ExpireDateField/index.constances.ts";
import {
  entryReasonsFieldName
} from "../../FormFields/EntryReasonsField/index.constances.ts";
import type {ExitPersonFromLetterType} from "../../letters/detail/individuals/index.types.ts";
import {riskListTypeFieldName} from "../../FormFields/RiskListTypeField/index.constances.ts";


export type AdminHighRiskIndividualRelatedShareLetterType = {
  id: number | string;
  [letterNumberFieldName]: string | number;
  [announceReferenceFieldName]: string;
  [letterDateFieldName]: string;
  [descriptionFieldName]: string;
}

export type AdminHighRiskIndividualRelatedLetterType = {
  [expireDateFieldName]: string;
  [riskListTypeFieldName]: string;
  exitType?: ExitPersonFromLetterType
  exitLetter?: AdminHighRiskIndividualRelatedShareLetterType
} & AdminHighRiskIndividualRelatedShareLetterType
