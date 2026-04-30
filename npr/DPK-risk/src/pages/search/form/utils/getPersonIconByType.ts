import type {SearchPageFormPersonType} from "../SearchPageForm.types.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../SearchPageForm.constances.ts";


function getPersonIconByType(type: SearchPageFormPersonType) {
  return Object.values(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS).find(item => item.name === type).icon
}

export default getPersonIconByType;