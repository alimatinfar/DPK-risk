import AdminHighRiskFormStep2Share
  from "../../../../high-risk-individuals/form/steps/step2/AdminHighRiskFormStep2Share.tsx";
import AdminInquiryHistoriesFormButtons from "../../AdminInquiryHistoriesFormButtons.tsx";
import {useAdminInquiryHistoriesFormStore} from "../../store/useAdminInquiryHistoriesFormStore.ts";


function AdminInquiryHistoryFormStep2() {

  const documentsList = useAdminInquiryHistoriesFormStore(state => state.formData.step2.documentsList)
  const setFormData = useAdminInquiryHistoriesFormStore(state => state.setFormData)

  return (
    <AdminHighRiskFormStep2Share
      setFormData={setFormData} documentsList={documentsList} ButtonsSection={AdminInquiryHistoriesFormButtons}
    />
  );
}

export default AdminInquiryHistoryFormStep2;
