import createAdminHighRiskIndividualsStore
  from "../../../high-risk-individuals/form/store/createAdminHighRiskIndividualsStore.ts";
import {INDEXED_DB_KEYS} from "../../../../../constances/indexedBDKeys.ts";
import type {AdminInquiryHistoriesFormDataType} from "../index.types.ts";
import {ADMIN_INQUIRY_HISTORIES_FORM_INITIAL_DATA} from "../constances/initialFormData.constances.ts";

export const useAdminInquiryHistoriesFormStore = createAdminHighRiskIndividualsStore<AdminInquiryHistoriesFormDataType>({
  formData: ADMIN_INQUIRY_HISTORIES_FORM_INITIAL_DATA,
  storageKey: INDEXED_DB_KEYS.ADMIN_HIGH_RISK_INDIVIDUALS
})
