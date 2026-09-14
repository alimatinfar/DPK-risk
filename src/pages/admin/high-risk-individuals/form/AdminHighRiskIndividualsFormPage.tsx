import AdminHighRiskIndividualsFormPageShare from "./AdminHighRiskIndividualsFormPageShare.tsx";
import useAdminHighRiskIndividualsFormCurrentStep from "./store/useAdminHighRiskIndividualsFormCurrentStep.ts";
import {useAdminHighRiskIndividualsFormStore} from "./store/useAdminHighRiskIndividualsFormStore.ts";
import {ADMIN_HIGH_RISK_FORM_STEPS} from "./constances/steps.constances.tsx";
import ROUTER_LINKS from "../../../../constances/routerLinks.ts";


function AdminHighRiskIndividualsFormPage() {

  const {currentStep} = useAdminHighRiskIndividualsFormCurrentStep()
  const formIsDirty = useAdminHighRiskIndividualsFormStore(state => state.formData.formIsDirty)
  const formSubmitted = useAdminHighRiskIndividualsFormStore(state => state.formData.formSubmitted)
  const clearForm = useAdminHighRiskIndividualsFormStore(state => state.clearForm)

  return (
    <AdminHighRiskIndividualsFormPageShare
      formIsDirty={formIsDirty} clearForm={clearForm} formSubmitted={formSubmitted}
      currentStep={currentStep} steps={ADMIN_HIGH_RISK_FORM_STEPS}
      redirectUrl={ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL}
    />
  );
}

export default AdminHighRiskIndividualsFormPage;
