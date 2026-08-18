import ReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import Button from "../../../../../../../components/Form/Button/Button.tsx";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps
} from "./AdminHighRiskIndividualsLettersDetailDocumentsFormModal.tsx";
import useAdminHighRiskIndividualsLettersDetailDocumentsFormModal
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocumentsFormModal.ts";
import AdminHighRiskIndividualsDocumentFormFields from "../../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/AdminHighRiskIndividualsDocumentFormFields.tsx";


type Props = {
  isEditMode: boolean;
} & Pick<AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps, 'modalState'>

function AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent(
  {modalState, isEditMode}: Props
) {

  const {
    formMethods, onSubmit
  } = useAdminHighRiskIndividualsLettersDetailDocumentsFormModal({
    modalState
  })

  return (
    <ReactHookFormWrapper
      formMethods={formMethods} onSubmit={onSubmit}
    >
      <AdminHighRiskIndividualsDocumentFormFields/>

      <div className='mt-2'>
        <Button
          fullWidth type='submit'
        >
          {isEditMode ? 'ویرایش' : 'ثبت'}
        </Button>
      </div>
    </ReactHookFormWrapper>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent;
