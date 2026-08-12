import Ls from "../../../utils/customLocalStorage.ts";
import LS_KEYS from "../../../constances/localStorageKeys.ts";
import type {
  ResultPersonCardDataType, ResultCardDataTypeForeignCitizen,
  ResultCardDataTypeLegal, ResultCardDataTypeNatural, ResultCardDataTypeShareFields
} from "../../search/result/ResultCard.types.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../search/form/SearchPageForm.constances.ts";
import {
  legalRegistrationNumberFieldName
} from "../../search/form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {
  nationalCodeFieldName
} from "../../search/form/formFields/natural/NationalCodeField/NationalCodeField.constances.ts";
import {
  comprehensiveForeignNationalsIdFieldName
} from "../../search/form/formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.constances.ts";


function getActivePersonData() {

  const activePersonData = Ls.get(LS_KEYS.PERSON_DATA) as ResultPersonCardDataType

  function isNatural(
    data: ResultPersonCardDataType
  ): data is ResultCardDataTypeNatural & ResultCardDataTypeShareFields {
    return data?.type === SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name
  }

  function isForeignCitizen(
    data: ResultPersonCardDataType
  ): data is ResultCardDataTypeForeignCitizen & ResultCardDataTypeShareFields {
    return data?.type === SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name
  }

  function isLegal(
    data: ResultPersonCardDataType
  ): data is ResultCardDataTypeLegal & ResultCardDataTypeShareFields {
    return data?.type === SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name
  }

  function getActivePersonNationalId() {
    return isLegal(activePersonData) ?
      activePersonData[legalRegistrationNumberFieldName] :
      isNatural(activePersonData) ? activePersonData[nationalCodeFieldName] :
        isForeignCitizen(activePersonData) ? activePersonData[comprehensiveForeignNationalsIdFieldName] : ''
  }

  const isNaturalBool = isNatural(activePersonData)
  const isForeignCitizenBool = isForeignCitizen(activePersonData)
  const isLegalBool = isLegal(activePersonData)

  return {
    activePersonData, isNatural, isForeignCitizen, isLegal, getActivePersonNationalId,
    isNaturalBool, isForeignCitizenBool, isLegalBool
  }
}

export default getActivePersonData;
