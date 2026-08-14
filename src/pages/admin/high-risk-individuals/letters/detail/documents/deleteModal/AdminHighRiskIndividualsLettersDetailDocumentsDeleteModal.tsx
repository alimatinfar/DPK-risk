import Modal, {type ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";
import AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent
  from "./AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent.tsx";


export type AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps = {
  modalState: AdminHighRiskIndividualsLettersDetailDocumentType | boolean;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal(
  {open, onClose, modalState}: AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps
) {

  return (
    <Modal
      open={open} onClose={onClose} title='حذف مستند'
      description='ايا از انجام عمليات حذف اطمينان داريد؟'
    >
      <AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent
        cancelAction={onClose} modalState={modalState}
      />
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal;
