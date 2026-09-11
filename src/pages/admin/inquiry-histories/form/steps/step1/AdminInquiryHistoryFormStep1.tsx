import AdminHighRiskFormStep1Share
  from "../../../../high-risk-individuals/form/steps/step1/AdminHighRiskFormStep1Share.tsx";
import AdminHighRiskIndividualsFormButtons
  from "../../../../high-risk-individuals/form/AdminHighRiskIndividualsFormButtons.tsx";
import {useAdminInquiryHistoriesFormStore} from "../../store/useAdminInquiryHistoriesFormStore.ts";

function AdminInquiryHistoryFormStep1() {

  const defaultValues = useAdminInquiryHistoriesFormStore(state => state.formData.step1)
  const setFormData = useAdminInquiryHistoriesFormStore(state => state.setFormData)
  const formIsDirty = useAdminInquiryHistoriesFormStore(state => state.formData.formIsDirty)

  return (
    <AdminHighRiskFormStep1Share
      formIsDirty={formIsDirty} setFormData={setFormData} defaultValues={defaultValues}
      // TODO should filled this section
      // existsLetterApiUrl={APIS.ADMIN_HIGH_RISK_INDIVIDUAL_EXIST_LETTER}
      existsLetterApiUrl={''} isInquiryHistory
      ButtonsSection={AdminHighRiskIndividualsFormButtons}
    />
  );
}

export default AdminInquiryHistoryFormStep1;
