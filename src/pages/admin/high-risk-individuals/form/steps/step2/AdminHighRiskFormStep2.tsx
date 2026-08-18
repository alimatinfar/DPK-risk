import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import AdminHighRiskIndividualsDocumentsListForm
  from "../../../FormFields/AdminHighRiskIndividualsDocumentsListForm/AdminHighRiskIndividualsDocumentsListForm.tsx";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore.ts";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";

function AdminHighRiskFormStep2() {

  const documentsList = useAdminHighRiskIndividualsFormStore(state => state.formData.step2.documentsList)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)

  function setDocumentsList(value: AdminHighRiskIndividualsDocumentFormDataType[]) {
    setFormData({step2: {documentsList: value}})
  }

  return (
    <div>
      <AdminHighRiskIndividualsDocumentsListForm
        documentsList={documentsList} setDocumentsList={setDocumentsList}
      />

      <AdminHighRiskIndividualsFormButtons />
    </div>
  );
}

export default AdminHighRiskFormStep2;
