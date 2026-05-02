import type {SearchPageFormPersonType} from "../SearchPageForm.types.ts";
import getPersonTypeItem from "./getPersonTypeItem.ts";


function getPersonIconByType(type: SearchPageFormPersonType) {
  return getPersonTypeItem(type)?.icon
}

export default getPersonIconByType;