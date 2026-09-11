import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore.ts";
import AdminHighRiskFormStep2Share from "./AdminHighRiskFormStep2Share.tsx";


function AdminHighRiskFormStep2() {

  const documentsList = useAdminHighRiskIndividualsFormStore(state => state.formData.step2.documentsList)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)

  return (
    <AdminHighRiskFormStep2Share
      setFormData={setFormData} documentsList={documentsList} ButtonsSection={AdminHighRiskIndividualsFormButtons}
    />
  );
}

export default AdminHighRiskFormStep2;
