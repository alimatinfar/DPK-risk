import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import useAdminHighRiskIndividualsFormCurrentStep from "../../store/useAdminHighRiskIndividualsFormCurrentStep.ts";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore.ts";
import AdminHighRiskFormStep3Share from "./AdminHighRiskFormStep3Share.tsx";
import APIS from "../../../../../../request/constances/apis.ts";

function AdminHighRiskFormStep3() {

  const formDataStep1 = useAdminHighRiskIndividualsFormStore(state => state.formData.step1)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)
  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const {setCurrentStep} = useAdminHighRiskIndividualsFormCurrentStep()

  return (
    <AdminHighRiskFormStep3Share
      formDataStep1={formDataStep1} setFormData={setFormData} individuals={individuals} setCurrentStep={setCurrentStep}
      ButtonsSection={AdminHighRiskIndividualsFormButtons}
    />
  );
}

export default AdminHighRiskFormStep3;
