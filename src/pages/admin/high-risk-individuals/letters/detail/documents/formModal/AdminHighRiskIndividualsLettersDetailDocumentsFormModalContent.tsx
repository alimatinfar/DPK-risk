import ReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import Button from "../../../../../../../components/Form/Button/Button.tsx";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps
} from "./AdminHighRiskIndividualsLettersDetailDocumentsFormModal.tsx";
import useAdminHighRiskIndividualsLettersDetailDocumentsFormModal
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocumentsFormModal.ts";
import AdminHighRiskIndividualsDocumentFormFields from "../../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/AdminHighRiskIndividualsDocumentFormFields.tsx";
import type {ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";


export type AdminHighRiskIndividualsLettersDetailDocumentsFormModalContentProps = {
  isEditMode: boolean;
  apiAddress: string;
} & Pick<AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps, 'modalState'> &
  Pick<ModalProps, 'onClose'>

function AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent(
  {
    modalState, isEditMode, onClose, apiAddress
  }: AdminHighRiskIndividualsLettersDetailDocumentsFormModalContentProps
) {

  const {
    formMethods, onSubmit, loading
  } = useAdminHighRiskIndividualsLettersDetailDocumentsFormModal({
    modalState, onClose, apiAddress
  })

  return (
    <ReactHookFormWrapper
      formMethods={formMethods} onSubmit={onSubmit}
    >
      <AdminHighRiskIndividualsDocumentFormFields/>

      <div className='mt-2'>
        <Button
          fullWidth type='submit' loading={loading}
        >
          {isEditMode ? 'ویرایش' : 'ثبت'}
        </Button>
      </div>
    </ReactHookFormWrapper>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent;
