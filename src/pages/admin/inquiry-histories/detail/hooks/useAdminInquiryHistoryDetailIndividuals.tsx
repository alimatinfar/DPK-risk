import {useMemo} from "react";
import {legalTypeFieldName} from "../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import displayDate from "../../../../../utils/display/displayDate.ts";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA,
  EXIT_PERSON_FROM_LETTER_KEYS
} from "../../../high-risk-individuals/letters/detail/individuals/index.constances.ts";

function useAdminInquiryHistoryDetailIndividuals() {

  const individualsList = useMemo(function () {
    return [
      ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA[0],
      ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA[0],
      ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA[0],
      ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA[0],
      ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA[0],
    ]
  }, [])

  return {
    individualsList
  }
}

export default useAdminInquiryHistoryDetailIndividuals;
