import AdminHighRiskFormStep1Share
  from "../../../../high-risk-individuals/form/steps/step1/AdminHighRiskFormStep1Share.tsx";
import {useAdminInquiryHistoriesFormStore} from "../../store/useAdminInquiryHistoriesFormStore.ts";
import AdminInquiryHistoriesFormButtons from "../../AdminInquiryHistoriesFormButtons.tsx";
import APIS from "../../../../../../request/constances/apis.ts";

function AdminInquiryHistoryFormStep1() {

  const defaultValues = useAdminInquiryHistoriesFormStore(state => state.formData.step1)
  const setFormData = useAdminInquiryHistoriesFormStore(state => state.setFormData)
  const formIsDirty = useAdminInquiryHistoriesFormStore(state => state.formData.formIsDirty)

  return (
    <AdminHighRiskFormStep1Share
      formIsDirty={formIsDirty} setFormData={setFormData} defaultValues={defaultValues}
      existsLetterApiUrl={APIS.ADMIN_INQUIRY_HISTORIES_EXIST_LETTER} isInquiryHistory
      ButtonsSection={AdminInquiryHistoriesFormButtons}
    />
  );
}

export default AdminInquiryHistoryFormStep1;
