import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import AdminHighRiskIndividualsDocumentsListForm
  from "../../../FormFields/AdminHighRiskIndividualsDocumentsListForm/AdminHighRiskIndividualsDocumentsListForm.tsx";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore.ts";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";
import toastPromise from "../../../../../../utils/toastPromise";
import AdminHighRiskFormStep2DocumentsList from "./AdminHighRiskFormStep2DocumentsList";


function AdminHighRiskFormStep2() {

  const documentsList = useAdminHighRiskIndividualsFormStore(state => state.formData.step2.documentsList)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)

  function setDocumentsList(value: AdminHighRiskIndividualsDocumentFormDataType[]) {
    setFormData({step2: {documentsList: value}})
  }

  function nextStepHandler() {
    if (documentsList?.length === 0)
      return toastPromise().then(toast => toast.error('حداقل یک سند اضافه کنید'))

    setFormData({
      currentStep: 3,
    })
  }

  return (
    <div>
      <AdminHighRiskFormStep2DocumentsList documentsList={documentsList} setDocumentsList={setDocumentsList}/>

      <AdminHighRiskIndividualsFormButtons
        onClick={nextStepHandler}
      />
    </div>
  );
}

export default AdminHighRiskFormStep2;
