import Modal, {type ModalProps} from "../../../components/others/Modal/Modal.tsx";
import useAdminInquiryHistoriesDeleteModal from "./hooks/useAdminInquiryHistoriesDeleteModal.ts";
import AdminHighRiskIndividualsDeleteForm from "../high-risk-individuals/form/AdminHighRiskIndividualsDeleteForm.tsx";


export type AdminInquiryHistoriesDeleteModalProps = {
  modalState: number | null;
  refetch: () => void;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminInquiryHistoriesDeleteModal(
  {
    modalState, open, onClose, refetch
  }: AdminInquiryHistoriesDeleteModalProps
) {

  const {
    formMethods, onSubmit, loading
  } = useAdminInquiryHistoriesDeleteModal({
    onClose, modalState, refetch
  })

  return (
    <Modal
      open={open} onClose={onClose}
      title='حذف سابقه استعلام'
      description='آیا از حذف سابقه انتخاب شده اطمینان دارید ؟'
    >
      <AdminHighRiskIndividualsDeleteForm
        loading={loading} formMethods={formMethods} onSubmit={onSubmit} descriptionMaxLength={250}
        cancelAction={onClose}
      />
    </Modal>
  );
}

export default AdminInquiryHistoriesDeleteModal;
