import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import AdminHighRiskFormStep1Share from "./AdminHighRiskFormStep1Share.tsx";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore.ts";
import APIS from "../../../../../../request/constances/apis.ts";


function AdminHighRiskFormStep1() {

  const defaultValues = useAdminHighRiskIndividualsFormStore(state => state.formData.step1)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)
  const formIsDirty = useAdminHighRiskIndividualsFormStore(state => state.formData.formIsDirty)

  return (
    <AdminHighRiskFormStep1Share
      formIsDirty={formIsDirty} setFormData={setFormData} defaultValues={defaultValues}
      existsLetterApiUrl={APIS.ADMIN_HIGH_RISK_INDIVIDUAL_EXIST_LETTER}
      ButtonsSection={AdminHighRiskIndividualsFormButtons}
    />
  );
}

export default AdminHighRiskFormStep1;
