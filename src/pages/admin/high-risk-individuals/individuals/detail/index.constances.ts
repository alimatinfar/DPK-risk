import type {AdminHighRiskIndividualRelatedLetterType} from "./index.types.ts";
import {
  letterNumberFieldName
} from "../../FormFields/LetterNumberField/index.constances.ts";
import {
  announceReferenceFieldName
} from "../../FormFields/AnnouncingReferenceField/index.constances.ts";
import {letterDateFieldName} from "../../FormFields/LetterDateField/index.constances.ts";
import {descriptionFieldName} from "../../FormFields/DescriptionField/index.constances.ts";
import {expireDateFieldName} from "../../FormFields/ExpireDateField/index.constances.ts";
import {entryReasonsFieldName, entryReasonsFieldOptions} from "../../FormFields/EntryReasonsField/index.constances.ts";
import {EXIT_PERSON_FROM_LETTER_KEYS} from "../../letters/detail/individuals/index.constances";

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
    exitLetter: {
      id: 1,
      letterDate: '1405/10/10',
      letterNumber: '1234567890',
      description: 'حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. ',
      [announceReferenceFieldName]: 'قوه قضائیه'
    },
    exitType: EXIT_PERSON_FROM_LETTER_KEYS.WITH_LETTER
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
    exitType: EXIT_PERSON_FROM_LETTER_KEYS.WITH_EXPIRE_DATE
  },
  {
    id: 5,
    [letterNumberFieldName]: 321654321,
    [announceReferenceFieldName]: 'AnnounceReferenceFieldType',
    [letterDateFieldName]: '1405/07/07',
    [descriptionFieldName]: 'DescriptionFieldType',
    [expireDateFieldName]: '1405/10/10',
    [entryReasonsFieldName]: entryReasonsFieldOptions?.map(item => item.name),
  },
]
