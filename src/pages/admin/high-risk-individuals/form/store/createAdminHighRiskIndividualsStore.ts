import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {indexedDBStorage} from "../../../../../utils/store/indexedDBStorage.ts";


type FormStore<FormDataType> = {
  formData: FormDataType;
  setFormData: (data: Partial<FormDataType>) => void;
  clearForm: () => void;
};

type Props<FormDataType> = {
  formData: FormDataType;
  storageKey: string;
}

function createAdminHighRiskIndividualsStore<FormDataType>(
  {formData, storageKey}: Props<FormDataType>
) {
  return create<FormStore<FormDataType>>()(
    persist(
      (set) => ({
        formData,

        setFormData: (data) =>
          set((state) => ({
            formData: {
              ...state.formData,
              ...data,
            },
          })),

        clearForm: () =>
          set({
            formData,
          }),
      }),
      {
        name: storageKey,
        storage: createJSONStorage(() => indexedDBStorage),
      }
    )
  );
}

export default createAdminHighRiskIndividualsStore;
