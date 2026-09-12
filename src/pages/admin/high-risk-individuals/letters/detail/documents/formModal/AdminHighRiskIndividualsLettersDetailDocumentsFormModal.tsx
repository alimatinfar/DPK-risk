import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";
import Modal, {type ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";
import AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent
  from "./AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent.tsx";
import APIS from "../../../../../../../request/constances/apis.ts";


export type AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps = {
  modalState: AdminHighRiskIndividualsLettersDetailDocumentType | boolean;
  refetch: () => void;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailDocumentsFormModal(
  {
    open, onClose, modalState, refetch
  }: AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps
) {

  const isEditMode = typeof modalState !== 'boolean'
  const apiAddress = isEditMode ? APIS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_EDIT_DOCUMENT : APIS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_ADD_DOCUMENT

  return (
    <Modal
      open={open} onClose={onClose}
      title={`${isEditMode ? 'ویرایش' : 'افزودن'} مستند`}
    >
      <AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent
        isEditMode={isEditMode} modalState={modalState} onClose={onClose}
        apiAddress={apiAddress} refetch={refetch}
      />
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsFormModal;
