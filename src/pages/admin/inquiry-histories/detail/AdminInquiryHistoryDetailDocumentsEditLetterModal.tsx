import ReactHookFormWrapper from "../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import AdminHighRiskIndividualsBaseFormFields
  from "../../high-risk-individuals/FormFields/AdminHighRiskIndividualsBaseFormFields/AdminHighRiskIndividualsBaseFormFields.tsx";
import Button from "../../../../components/Form/Button/Button.tsx";
import Modal, {type ModalProps} from "../../../../components/others/Modal/Modal.tsx";
import type {AdminInquiryHistoryLetterDetailProps} from "./index.types.ts";
import useAdminInquiryHistoryDetailDocumentsEditLetterModal
  from "./hooks/useAdminInquiryHistoryDetailDocumentsEditLetterModal.ts";


export type AdminInquiryHistoryDetailDocumentsEditLetterModalProps =
  Pick<AdminInquiryHistoryLetterDetailProps, 'responseData' | 'refetch'> &
  Pick<ModalProps, 'open' | 'onClose'>

function AdminInquiryHistoryDetailDocumentsEditLetterModal(
  {
    open, onClose, responseData, refetch
  }: AdminInquiryHistoryDetailDocumentsEditLetterModalProps
) {

  const {
    formMethods, onSubmit, loading
  } = useAdminInquiryHistoryDetailDocumentsEditLetterModal({
    responseData, refetch, onClose
  })

  return (
    <Modal
      open={open} onClose={onClose} title='ویرایش نامه'
    >
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <AdminHighRiskIndividualsBaseFormFields
          isInquiryHistory hiddenResponseSubmissionStatus
        />

        <Button
          fullWidth type='submit' loading={loading}
        >
          ویرایش
        </Button>
      </ReactHookFormWrapper>
    </Modal>
  );
}

export default AdminInquiryHistoryDetailDocumentsEditLetterModal;
