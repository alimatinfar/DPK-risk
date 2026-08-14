import Modal, {type ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";
import DescriptionField from "../../../../FormFields/DescriptionField/DescriptionField.tsx";
import ReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import Button from "../../../../../../../components/Form/Button/Button.tsx";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";
import useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal.ts";


export type AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps = {
  modalState: AdminHighRiskIndividualsLettersDetailDocumentType | boolean;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal(
  {open, onClose, modalState}: AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps
) {

  const {
    formMethods, onSubmit
  } = useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal({
    modalState
  })

  return (
    <Modal
      open={open} onClose={onClose} title='حذف مستند'
      description='ايا از انجام عمليات حذف اطمينان داريد؟'
    >
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <DescriptionField/>

        <div className='grid grid-cols-2 gap-x-4 mt-2'>
          <Button
            variant='default' color='white'
          >
            انصراف
          </Button>

          <Button
            color='red' type='submit'
          >
            حذف
          </Button>
        </div>
      </ReactHookFormWrapper>
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal;
