import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";
import {indexedDBStorage} from "../../../../../utils/store/indexedDBStorage.ts";
import type {AdminHighRiskIndividualsFormDataType} from "../index.types.ts";
import {ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA} from "../constances/index.constances.tsx";
import {INDEXED_DB_KEYS} from "../../../../../constances/indexedBDKeys.ts";

type FormStore = {
  formData: AdminHighRiskIndividualsFormDataType;
  setFormData: (data: Partial<AdminHighRiskIndividualsFormDataType>) => void;
  clearForm: () => void;
};

export const useAdminHighRiskIndividualsFormStore = create<FormStore>()(
  persist(
    (set) => ({
      formData: ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA,

      setFormData: (data) =>
        set((state) => ({
          formData: {
            ...state.formData,
            ...data,
          },
        })),

      clearForm: () =>
        set({
          formData: ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA,
        }),
    }),
    {
      name: INDEXED_DB_KEYS.ADMIN_HIGH_RISK_INDIVIDUALS,
      storage: createJSONStorage(() => indexedDBStorage),
    }
  )
);
