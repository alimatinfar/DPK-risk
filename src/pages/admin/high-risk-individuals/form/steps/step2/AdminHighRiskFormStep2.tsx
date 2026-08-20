import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import AdminHighRiskIndividualsDocumentsListForm
  from "../../../FormFields/AdminHighRiskIndividualsDocumentsListForm/AdminHighRiskIndividualsDocumentsListForm.tsx";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore.ts";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";
import toastPromise from "../../../../../../utils/toastPromise";


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
      <AdminHighRiskIndividualsDocumentsListForm
        documentsList={documentsList} setDocumentsList={setDocumentsList}
        formWrapperClass='grid grid-cols-3'
        formFieldsProps={{
          descriptionClass: 'col-span-3',
          uploadFileFieldProps: {
            uploadBoxProps: {
              uploadBoxClass: 'col-span-3',
              fileCardClass: 'col-span-1',
            }
          }
        }}
        buttonClass='flex justify-end items-center col-start-3 mt-4' buttonIsNotFullWidth
        documentsListClass='grid grid-cols-2 gap-4'
      />

      <AdminHighRiskIndividualsFormButtons
        onClick={nextStepHandler}
      />
    </div>
  );
}

export default AdminHighRiskFormStep2;
