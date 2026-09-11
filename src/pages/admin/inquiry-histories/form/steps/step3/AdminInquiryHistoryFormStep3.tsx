import AdminHighRiskFormStep3Share
  from "../../../../high-risk-individuals/form/steps/step3/AdminHighRiskFormStep3Share.tsx";
import APIS from "../../../../../../request/constances/apis.ts";
import {useAdminInquiryHistoriesFormStore} from "../../store/useAdminInquiryHistoriesFormStore.ts";
import AdminInquiryHistoriesFormButtons from "../../AdminInquiryHistoriesFormButtons.tsx";
import useAdminInquiryHistoryFormCurrentStep from "../../store/useAdminInquiryHistoryFormCurrentStep.ts";


function AdminInquiryHistoryFormStep3() {

  const formDataStep1 = useAdminInquiryHistoriesFormStore(state => state.formData.step1)
  const setFormData = useAdminInquiryHistoriesFormStore(state => state.setFormData)
  const individuals = useAdminInquiryHistoriesFormStore(state => state.formData.step3.individuals)
  const {setCurrentStep} = useAdminInquiryHistoryFormCurrentStep()

  return (
    <AdminHighRiskFormStep3Share
      formDataStep1={formDataStep1} setFormData={setFormData} individuals={individuals} setCurrentStep={setCurrentStep}
      // TODO should set existCustomerApiUrl and uploadApiUrl
      // existCustomerApiUrl={APIS.ADMIN_HIGH_RISK_INDIVIDUAL_EXIST_CUSTOMER}
      // uploadApiUrl={APIS.ADMIN_HIGH_RISK_INDIVIDUAL_UPLOAD_EXCEL_CUSTOMERS}
      existCustomerApiUrl={''}
      uploadApiUrl={''}
      ButtonsSection={AdminInquiryHistoriesFormButtons}
    />
  );
}

export default AdminInquiryHistoryFormStep3;
