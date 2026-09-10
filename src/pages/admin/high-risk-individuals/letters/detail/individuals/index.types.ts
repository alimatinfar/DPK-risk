import type {ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances";
import {legalTypeFieldName} from "../../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances";
import {MODAL_STATE_TYPE_KEYS, EXIT_PERSON_FROM_LETTER_KEYS} from "./index.constances";
import type {SelectOptionType} from "../../../../../../components/Form/Select/select-exports.ts";
import type {Moment} from "moment-jalaali";

export type ExitPersonFromLetterType = typeof EXIT_PERSON_FROM_LETTER_KEYS[keyof typeof EXIT_PERSON_FROM_LETTER_KEYS]

export type AdminHighRiskIndividualsLettersDetailIndividualsDataItemType = Pick<ResultPersonCardDataType, 'type'> & {
  id: string | number;
  [legalTypeFieldName]?: string;
  lastName?: string;
  riskCustomerId: string | number;
  name: string;
  nationalCode: string | number;
  exitType?: ExitPersonFromLetterType
  exitLetter?: {
    id: string | number;
    letterNumber: string | number;
    reference: string;
    letterDate: Moment | string;
    description: string;
  }
}

export type AdminHighRiskIndividualsLettersDetailIndividualsDataType = AdminHighRiskIndividualsLettersDetailIndividualsDataItemType[]

//document modal state
export type ModalStateTypeId = {
  type: typeof MODAL_STATE_TYPE_KEYS[keyof typeof MODAL_STATE_TYPE_KEYS];
  id: string | number;
}

export type AdminHighRiskIndividualsLettersDetailIndividualsResponseItemType = {}
