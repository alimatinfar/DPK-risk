import useAdminHighRiskIndividualsFormCurrentStep
  from "../../../../high-risk-individuals/form/store/useAdminHighRiskIndividualsFormCurrentStep.ts";
import AdminHighRiskFormStep3Share
  from "../../../../high-risk-individuals/form/steps/step3/AdminHighRiskFormStep3Share.tsx";
import APIS from "../../../../../../request/constances/apis.ts";
import AdminHighRiskIndividualsFormButtons
  from "../../../../high-risk-individuals/form/AdminHighRiskIndividualsFormButtons.tsx";
import {useAdminInquiryHistoriesFormStore} from "../../store/useAdminInquiryHistoriesFormStore.ts";

function AdminInquiryHistoryFormStep3() {

  const formDataStep1 = useAdminInquiryHistoriesFormStore(state => state.formData.step1)
  const setFormData = useAdminInquiryHistoriesFormStore(state => state.setFormData)
  const individuals = useAdminInquiryHistoriesFormStore(state => state.formData.step3.individuals)
  const {setCurrentStep} = useAdminHighRiskIndividualsFormCurrentStep()

  return (
    <AdminHighRiskFormStep3Share
      formDataStep1={formDataStep1} setFormData={setFormData} individuals={individuals} setCurrentStep={setCurrentStep}
      // TODO should set existCustomerApiUrl and uploadApiUrl
      // existCustomerApiUrl={APIS.ADMIN_HIGH_RISK_INDIVIDUAL_EXIST_CUSTOMER}
      // uploadApiUrl={APIS.ADMIN_HIGH_RISK_INDIVIDUAL_UPLOAD_EXCEL_CUSTOMERS}
      existCustomerApiUrl={''}
      uploadApiUrl={''}
      ButtonsSection={AdminHighRiskIndividualsFormButtons}
    />
  );
}

export default AdminInquiryHistoryFormStep3;
