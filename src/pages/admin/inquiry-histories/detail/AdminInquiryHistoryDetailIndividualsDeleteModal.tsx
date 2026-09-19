import Modal, {type ModalProps} from "../../../../components/others/Modal/Modal.tsx";
import AdminHighRiskIndividualsDeleteForm
  from "../../high-risk-individuals/form/AdminHighRiskIndividualsDeleteForm.tsx";
import useAdminInquiryHistoryDetailIndividualsDeleteModal
  from "./hooks/useAdminInquiryHistoryDetailIndividualsDeleteModal.ts";


export type AdminInquiryHistoryDetailIndividualsDeleteModalProps = {
  refetch: () => void;
  modalState: {id: number, customerId: number} | boolean;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminInquiryHistoryDetailIndividualsDeleteModal(
  {
    open, onClose, refetch, modalState
  }: AdminInquiryHistoryDetailIndividualsDeleteModalProps
) {

  const {
    formMethods, loading, onSubmit
  } = useAdminInquiryHistoryDetailIndividualsDeleteModal({
    refetch, onClose, modalState
  })

  return (
    <Modal
      title='حذف شخص' open={open} onClose={onClose}
    >
      <AdminHighRiskIndividualsDeleteForm
        cancelAction={onClose} loading={loading} descriptionMaxLength={250}
        formMethods={formMethods} onSubmit={onSubmit}
      />
    </Modal>
  );
}

export default AdminInquiryHistoryDetailIndividualsDeleteModal;
