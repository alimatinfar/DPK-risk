import getActivePersonData from "./getActivePersonData.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../search/form/SearchPageForm.constances.ts";


function getActivePersonDataType() {

  const activePersonData = getActivePersonData()

  const isNatural = activePersonData.type === SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name
  const isForeignCitizen = activePersonData.type === SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name
  const isLegal = activePersonData.type === SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name

  return {
    isNatural, isForeignCitizen, isLegal
  }
}

export default getActivePersonDataType;