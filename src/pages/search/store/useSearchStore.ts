import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {indexedDBStorage} from "../../../utils/store/indexedDBStorage.ts";
import {INDEXED_DB_KEYS} from "../../../constances/indexedBDKeys.ts";
import type {SearchPageFormDataType} from "../form/SearchPageForm.types.ts";
import type {SearchPageResultProps} from "../result/SearchPageResult.tsx";
import type {SetZustandStoreType} from "../../../types/SetZustandStoreType.ts";
import {SEARCH_PAGE_INITIAL_FORM_DATA} from "../SearchPage.constances.ts";


export type SearchPageStoreType = {
  formData: SearchPageFormDataType;
  setStoreData: SetZustandStoreType<SearchPageStoreType>;
  resultData: SearchPageResultProps['resultData'];
}

const useSearchStore = create<SearchPageStoreType>()(
  persist(
    (set) => ({
      formData: SEARCH_PAGE_INITIAL_FORM_DATA,
      setStoreData: set,
      resultData: []
    }),
    {
      name: INDEXED_DB_KEYS.SEARCH_PERSON,
      storage: createJSONStorage(() => indexedDBStorage),
    }
  )
);

export default useSearchStore;
