import ReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import DescriptionField from "../../../../FormFields/DescriptionField/DescriptionField.tsx";
import Button from "../../../../../../../components/Form/Button/Button.tsx";
import useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal.ts";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps
} from "./AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal.tsx";
import type {ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";


type Props = {
  cancelAction: () => void;
} &
  Pick<AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps, 'modalState'> &
  Pick<ModalProps, 'onClose'>

function AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent(
  {cancelAction, modalState, onClose}: Props
) {

  const {
    formMethods, onSubmit, loading
  } = useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal({
    modalState, onClose
  })

  return (
    <ReactHookFormWrapper
      formMethods={formMethods} onSubmit={onSubmit}
    >
      <DescriptionField/>

      <div className='grid grid-cols-2 gap-x-4 mt-2'>
        <Button
          variant='default' color='white'
          onClick={cancelAction}
        >
          انصراف
        </Button>

        <Button
          color='red' type='submit' loading={loading}
        >
          حذف
        </Button>
      </div>
    </ReactHookFormWrapper>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent;
