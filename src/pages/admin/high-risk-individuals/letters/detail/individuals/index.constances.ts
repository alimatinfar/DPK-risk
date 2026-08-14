import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances";
import {type AdminHighRiskIndividualsLettersDetailIndividualsDataType} from "./index.types";
import {legalTypeFieldName} from "../../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances";
import {entryReasonsFieldOptions} from "../../../FormFields/EntryReasonsField/index.constances.ts";
import moment from "moment-jalaali";

export const EXIT_PERSON_FROM_LETTER_KEYS = {
  WITH_LETTER: 'withLetter',
  WITH_EXPIRE_DATE: 'withExpireDate',
} as const

export const EXIT_PERSON_FROM_LETTER_KEYS_LABEL = {
  [EXIT_PERSON_FROM_LETTER_KEYS.WITH_LETTER]: 'نامه',
  [EXIT_PERSON_FROM_LETTER_KEYS.WITH_EXPIRE_DATE]: 'تاریخ اعتبار',
} as const

export const ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA: AdminHighRiskIndividualsLettersDetailIndividualsDataType = [
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    id: 1,
    name: 'حسین',
    lastName: 'مبینی',
    nationalCode: '123456790',
    expireDate: moment(),
    entryReasons: entryReasonsFieldOptions,
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    id: 2,
    name: 'حسین',
    lastName: 'مبینی',
    nationalCode: '123456790',
    expireDate: moment(),
    entryReasons: entryReasonsFieldOptions,
    exitType: EXIT_PERSON_FROM_LETTER_KEYS.WITH_EXPIRE_DATE
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
    id: 3,
    name: 'حسین',
    lastName: 'مبینی',
    nationalCode: '123456790',
    expireDate: moment(),
    entryReasons: entryReasonsFieldOptions,
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
    id: 4,
    name: 'حسین',
    lastName: 'مبینی',
    nationalCode: '123456790',
    expireDate: moment(),
    entryReasons: entryReasonsFieldOptions,
    exitLetter: {
      id: 1,
      letterDate: moment(),
      letterNumber: '1234567890',
      description: 'حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. حکم دريافت شده از مرجع. ',
      reference: 'قوه قضائیه'
    },
    exitType: EXIT_PERSON_FROM_LETTER_KEYS.WITH_LETTER
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
    id: 5,
    name: 'بنیان',
    [legalTypeFieldName]: 'مبینی',
    nationalCode: '123456790',
    expireDate: moment(),
    entryReasons: entryReasonsFieldOptions,
  },
] as const
