import AdminHighRiskIndividualsFormPageShare
  from "../../high-risk-individuals/form/AdminHighRiskIndividualsFormPageShare.tsx";
import {ADMIN_INQUIRY_HISTORY_FORM_STEPS} from "./constances/steps.constances.tsx";
import {useAdminInquiryHistoriesFormStore} from "./store/useAdminInquiryHistoriesFormStore.ts";
import useAdminInquiryHistoryFormCurrentStep from "./store/useAdminInquiryHistoryFormCurrentStep.ts";
import ROUTER_LINKS from "../../../../constances/routerLinks.ts";

function AdminInquiryHistoriesFormPage() {

  const {currentStep} = useAdminInquiryHistoryFormCurrentStep()
  const formIsDirty = useAdminInquiryHistoriesFormStore(state => state.formData.formIsDirty)
  const formSubmitted = useAdminInquiryHistoriesFormStore(state => state.formData.formSubmitted)
  const clearForm = useAdminInquiryHistoriesFormStore(state => state.clearForm)

  return (
    <AdminHighRiskIndividualsFormPageShare
      formIsDirty={formIsDirty} clearForm={clearForm} formSubmitted={formSubmitted}
      currentStep={currentStep} steps={ADMIN_INQUIRY_HISTORY_FORM_STEPS}
      redirectUrl={ROUTER_LINKS.ADMIN_INQUIRY_HISTORIES}
    />
  );
}

export default AdminInquiryHistoriesFormPage;
