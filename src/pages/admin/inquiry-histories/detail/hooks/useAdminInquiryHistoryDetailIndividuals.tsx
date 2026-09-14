import {useMemo} from "react";
import {legalTypeFieldName} from "../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import displayDate from "../../../../../utils/display/displayDate.ts";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA,
  EXIT_PERSON_FROM_LETTER_KEYS
} from "../../../high-risk-individuals/letters/detail/individuals/index.constances.ts";
import type {AdminInquiryHistoryLetterDetailProps} from "../index.types.ts";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDataType
} from "../../../high-risk-individuals/letters/detail/individuals/index.types.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../search/form/SearchPageForm.constances.ts";

function useAdminInquiryHistoryDetailIndividuals(
  {responseData}: AdminInquiryHistoryLetterDetailProps
) {

  const individualsList: AdminHighRiskIndividualsLettersDetailIndividualsDataType = useMemo(function () {
    const customers = responseData?.data?.customers
    if (!customers) return []

    return customers?.map(item => {

      const type = item?.isLegal ? SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name : item?.nationality === 1 ?
        SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name : SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name

      return {
        type,
        id: item?.customerId,
        name: item?.isLegal ? item?.lastName : item?.firstName,
        ...item?.isLegal ? {[legalTypeFieldName]: ''} : {lastName: item?.lastName},
        nationalCode: item?.nationalID,
      }
    })
  }, [responseData])

  return {
    individualsList
  }
}

export default useAdminInquiryHistoryDetailIndividuals;
