import type {SearchPageFormPersonType} from "../SearchPageForm.types.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../SearchPageForm.constances.ts";


function getPersonTypeItem(type: SearchPageFormPersonType) {
  return Object.values(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS).find(item => item.name === type)
}

export default getPersonTypeItem;
