import type {AdminHighRiskIndividualRelatedLetterType} from "./index.types.ts";
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
import moment from "moment-jalaali";
import {expireDateFieldName} from "../../FormFields/ExpireDateField/index.constances.ts";
import {entryReasonsFieldName, entryReasonsFieldOptions} from "../../FormFields/EntryReasonsField/index.constances.ts";

export const ADMIN_HIGH_RISK_INDIVIDUAL_RELATED_LETTERS_FAKE_DATE: AdminHighRiskIndividualRelatedLetterType[] = [
  {
    id: 1,
    [letterNumberFieldName]: 321654321,
    [announceReferenceFieldName]: 'AnnounceReferenceFieldType',
    [letterDateFieldName]: '1405/07/07',
    [descriptionFieldName]: 'DescriptionFieldType',
    [expireDateFieldName]: '1405/10/10',
    [entryReasonsFieldName]: entryReasonsFieldOptions?.map(item => item.name),
  },
  {
    id: 2,
    [letterNumberFieldName]: 321654321,
    [announceReferenceFieldName]: 'AnnounceReferenceFieldType',
    [letterDateFieldName]: '1405/07/07',
    [descriptionFieldName]: 'DescriptionFieldType',
    [expireDateFieldName]: '1405/10/10',
    [entryReasonsFieldName]: entryReasonsFieldOptions?.map(item => item.name),
  },
  {
    id: 3,
    [letterNumberFieldName]: 321654321,
    [announceReferenceFieldName]: 'AnnounceReferenceFieldType',
    [letterDateFieldName]: '1405/07/07',
    [descriptionFieldName]: 'DescriptionFieldType',
    [expireDateFieldName]: '1405/10/10',
    [entryReasonsFieldName]: entryReasonsFieldOptions?.map(item => item.name),
  },
  {
    id: 4,
    [letterNumberFieldName]: 321654321,
    [announceReferenceFieldName]: 'AnnounceReferenceFieldType',
    [letterDateFieldName]: '1405/07/07',
    [descriptionFieldName]: 'DescriptionFieldType',
    [expireDateFieldName]: '1405/10/10',
    [entryReasonsFieldName]: entryReasonsFieldOptions?.map(item => item.name),
  },
]
