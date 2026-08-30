import type {ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances";
import {legalTypeFieldName} from "../../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances";
import {MODAL_STATE_TYPE_KEYS, EXIT_PERSON_FROM_LETTER_KEYS} from "./index.constances";
import type {SelectOptionType} from "../../../../../../components/Form/Select/select-exports.ts";
import type {Moment} from "moment-jalaali";

type LegalTypeData = {
  type: typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
  [legalTypeFieldName]: string;
}

type RealTypeData = {
  type: typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name | typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
  lastName: string
}

export type ExitPersonFromLetterType = typeof EXIT_PERSON_FROM_LETTER_KEYS[keyof typeof EXIT_PERSON_FROM_LETTER_KEYS]

export type AdminHighRiskIndividualsLettersDetailIndividualsDataItemType = Pick<ResultPersonCardDataType, 'type'> & {
  id: string | number;
  riskCustomerId: string | number;
  name: string;
  nationalCode: string;
  expireDate: Moment;
  entryReasons: SelectOptionType[];
  exitType?: ExitPersonFromLetterType
  exitLetter?: {
    id: string | number;
    letterNumber: string | number;
    reference: string;
    letterDate: Moment;
    description: string;
  }
} & (LegalTypeData | RealTypeData)

export type AdminHighRiskIndividualsLettersDetailIndividualsDataType = AdminHighRiskIndividualsLettersDetailIndividualsDataItemType[]

//document modal state
export type ModalStateTypeId = {
  type: typeof MODAL_STATE_TYPE_KEYS[keyof typeof MODAL_STATE_TYPE_KEYS];
  id: string | number;
}

export type AdminHighRiskIndividualsLettersDetailIndividualsResponseItemType = {}
