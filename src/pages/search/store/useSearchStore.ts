import {create} from "zustand";
import type {SearchPageFormDataType} from "../form/SearchPageForm.types.ts";
import type {SearchPageResultProps} from "../result/SearchPageResult.tsx";
import type {SetZustandStoreType} from "../../../types/SetZustandStoreType.ts";
import {SEARCH_PAGE_INITIAL_FORM_DATA} from "../SearchPage.constances.ts";


export type SearchPageStoreType = {
  formData: SearchPageFormDataType;
  setStoreData: SetZustandStoreType<SearchPageStoreType>;
  resultData: SearchPageResultProps['resultData'];
}

const useSearchStore = create<SearchPageStoreType>((set) => ({
  formData: SEARCH_PAGE_INITIAL_FORM_DATA,
  setStoreData: set,
  resultData: []
}))

export default useSearchStore;
