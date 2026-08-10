import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "./index.types.ts";
import Modal, {type ModalProps} from "../../../../../../components/others/Modal/Modal.tsx";

type Props = {
  modalState: AdminHighRiskIndividualsLettersDetailDocumentType | boolean;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailDocumentsFormModal(
  {open, onClose, modalState}: Props
) {

  const isEditMode = typeof modalState !== 'boolean'

  return (
    <Modal
      open={open} onClose={onClose}
      title={`${isEditMode ? 'ویرایش' : 'افزودن'} مستند`}
    >

    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsFormModal;
