import type {AdminHighRiskIndividualsFormDataType} from "../index.types.ts";
import {ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA} from "../constances/index.constances.tsx";
import {INDEXED_DB_KEYS} from "../../../../../constances/indexedBDKeys.ts";
import createAdminHighRiskIndividualsStore from "./createAdminHighRiskIndividualsStore.ts";

type FormStore = {
  formData: AdminHighRiskIndividualsFormDataType;
  setFormData: (data: Partial<AdminHighRiskIndividualsFormDataType>) => void;
  clearForm: () => void;
};

export const useAdminHighRiskIndividualsFormStore = createAdminHighRiskIndividualsStore<AdminHighRiskIndividualsFormDataType>({
  formData: ADMIN_HIGH_RISK_INDIVIDUALS_FORM_INITIAL_DATA,
  storageKey: INDEXED_DB_KEYS.ADMIN_HIGH_RISK_INDIVIDUALS
})
