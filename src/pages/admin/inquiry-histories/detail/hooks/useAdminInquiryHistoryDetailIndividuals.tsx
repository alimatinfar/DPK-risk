import {useMemo} from "react";
import {legalTypeFieldName} from "../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import type {AdminInquiryHistoryLetterDetailProps} from "../index.types.ts";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDataType
} from "../../../high-risk-individuals/letters/detail/individuals/index.types.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../search/form/SearchPageForm.constances.ts";
import getPersonTypeByNationality from "../../../../search/form/utils/getPersonTypeByNationality.ts";


function useAdminInquiryHistoryDetailIndividuals(
  {responseData}: Pick<AdminInquiryHistoryLetterDetailProps, 'responseData'>
) {

  const individualsList: AdminHighRiskIndividualsLettersDetailIndividualsDataType = useMemo(function () {
    const customers = responseData?.data?.customers
    if (!customers) return []

    return customers?.map(item => {

      const type = getPersonTypeByNationality({
        nationality: item?.nationality, isLegal: item?.isLegal
      })

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
