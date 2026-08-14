import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../../search/form/SearchPageForm.constances.ts";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDataItemType
} from "../index.types.ts";
import {
  legalTypeFieldName
} from "../../../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";

function useAdminHighRiskIndividualsLettersDetailIndividualsCategories() {

  function getFields(item: AdminHighRiskIndividualsLettersDetailIndividualsDataItemType) {
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
        label: 'کد ملی', value: item.nationalCode
      },
      {
        label: 'تاریخ اعتبار', value: item.expireDate
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
        label: 'تاریخ نامه', value: item.exitLetter?.letterDate
      },
    ] : []
  }

  return {
    getFields, getExitLetterFields
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsCategories;
