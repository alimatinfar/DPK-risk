import Ls from "../../../utils/customLocalStorage.ts";
import LS_KEYS from "../../../constances/localStorageKeys.ts";
import type {SearchPageResultCardDataType} from "../../search/result/SearchPageResult.types.ts";


function getActivePersonData() {
  return Ls.get(LS_KEYS.PERSON_DATA) as SearchPageResultCardDataType
}

export default getActivePersonData;