import type {ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances";
import {legalTypeFieldName} from "../../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances";
import {EXIT_PERSON_FROM_LETTER_KEYS} from "./index.constances";

type LegalTypeData = {
  type: typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
  [legalTypeFieldName]: string;
}

type RealTypeData = {
  type: typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name | typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
  lastName: string
}

export type AdminHighRiskIndividualsLettersDetailIndividualsDataItemType = Pick<ResultPersonCardDataType, 'type'> & {
  id: string | number;
  name: string;
  nationalCode: string;
  expireDate: string;
  entryReason: string[];
  exitType?: typeof EXIT_PERSON_FROM_LETTER_KEYS[keyof typeof EXIT_PERSON_FROM_LETTER_KEYS]
  exitLetter?: {
    id: string | number;
    letterNumber: string | number;
    reference: string;
    letterDate: string;
    description: string;
  }
} & (LegalTypeData | RealTypeData)

export type AdminHighRiskIndividualsLettersDetailIndividualsDataType = AdminHighRiskIndividualsLettersDetailIndividualsDataItemType[]

