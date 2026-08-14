import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";
import Modal, {type ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";
import AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent
  from "./AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent.tsx";


export type AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps = {
  modalState: AdminHighRiskIndividualsLettersDetailDocumentType | boolean;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailDocumentsFormModal(
  {open, onClose, modalState}: AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps
) {

  const isEditMode = typeof modalState !== 'boolean'

  return (
    <Modal
      open={open} onClose={onClose}
      title={`${isEditMode ? 'ویرایش' : 'افزودن'} مستند`}
    >
      <AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent
        isEditMode={isEditMode} modalState={modalState}
      />
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsFormModal;
