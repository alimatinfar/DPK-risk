import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";
import toastPromise from "../../../../../../utils/toastPromise.ts";
import AdminHighRiskFormStep2DocumentsList from "./AdminHighRiskFormStep2DocumentsList.tsx";
import type {AdminHighRiskFormStep1ShareProps} from "../step1/AdminHighRiskFormStep1Share.tsx";


type Props = {
  setFormData: any;
  documentsList: AdminHighRiskIndividualsDocumentFormDataType[];
} & Pick<AdminHighRiskFormStep1ShareProps, 'ButtonsSection'>

function AdminHighRiskFormStep2Share(
  {
    setFormData, documentsList, ButtonsSection
  }: Props
) {

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
      <AdminHighRiskFormStep2DocumentsList
        documentsList={documentsList} setDocumentsList={setDocumentsList}
      />

      <ButtonsSection
        onClick={nextStepHandler}
      />
    </div>
  );
}

export default AdminHighRiskFormStep2Share;
