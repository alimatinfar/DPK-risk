import Modal, {type ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";
import AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent
  from "./AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent.tsx";
import APIS from "../../../../../../../request/constances/apis.ts";
import {useParams} from "react-router";


export type AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps = {
  modalState: AdminHighRiskIndividualsLettersDetailDocumentType | boolean;
  refetch: () => void;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal(
  {
    open, onClose, modalState, refetch
  }: AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps
) {

  const {id: letterId} = useParams()

  return (
    <Modal
      open={open} onClose={onClose} title='حذف مستند'
      description='ايا از انجام عمليات حذف اطمينان داريد؟'
    >
      <AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent
        cancelAction={onClose} modalState={modalState} onClose={onClose}
        apiAddress={APIS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DELETE_DOCUMENT}
        letterId={letterId || ''} refetch={refetch}
      />
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal;
