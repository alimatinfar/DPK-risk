import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../../search/form/SearchPageForm.constances.ts";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDataItemType
} from "../index.types.ts";
import {
  legalTypeFieldName
} from "../../../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import getFormattedMomentJalaliDateTime
  from "../../../../../../../utils/dateAndTIme/momentJalaliDateTime/getFormattedMomentJalaliDateTime.ts";
import {
  legalRegistrationNumberFieldLabel
} from "../../../../../../search/form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {
  comprehensiveForeignNationalsIdFieldLabel
} from "../../../../../../search/form/formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.constances.ts";
import {
  nationalCodeFieldLabel
} from "../../../../../../search/form/formFields/natural/NationalCodeField/NationalCodeField.constances.ts";

function useAdminHighRiskIndividualsLettersDetailIndividualsCategories() {

  function getFields(item: AdminHighRiskIndividualsLettersDetailIndividualsDataItemType) {
    const isLegal = item.type === SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name
    const isForeignCitizen = item.type === SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name

    return [
      {
        label: 'نام', value: item.name
      },
      ...item.type === SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name ? [{
        label: 'نوع حقوقی', value: item?.[legalTypeFieldName]
      }] : [{
        label: 'نام خانوادگی', value: item?.lastName
      }],
      {
        label: isLegal ? legalRegistrationNumberFieldLabel : isForeignCitizen ? comprehensiveForeignNationalsIdFieldLabel : nationalCodeFieldLabel,
        value: item.nationalCode
      },
    ]
  }

  function getExitLetterFields(item: AdminHighRiskIndividualsLettersDetailIndividualsDataItemType) {
    return item.exitLetter ? [
      {
        label: 'شماره نامه', value: item.exitLetter?.letterNumber
      },
      {
        label: 'مرجع', value: item.exitLetter?.reference
      },
      {
        label: 'تاریخ نامه', value: getFormattedMomentJalaliDateTime({date: item.exitLetter?.letterDate, mode: 'jDate'})
      },
    ] : []
  }

  return {
    getFields, getExitLetterFields
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsCategories;
