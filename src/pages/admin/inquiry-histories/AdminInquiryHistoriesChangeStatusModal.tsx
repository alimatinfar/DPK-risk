import Modal, {type ModalProps} from "../../../components/others/Modal/Modal.tsx";
import ReactHookFormWrapper from "../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import ResponseSubmissionStatusField
  from "./FormFields/ResponseSubmissionStatusField/ResponseSubmissionStatusField.tsx";
import Button from "../../../components/Form/Button/Button.tsx";
import type {AdminInquiryHistoriesResponseItemType} from "./index.types.ts";
import useAdminInquiryHistoriesChangeStatusModal from "./hooks/useAdminInquiryHistoriesChangeStatusModal.ts";


export type AdminInquiryHistoriesChangeStatusModalProps = {
  modalState: AdminInquiryHistoriesResponseItemType | null;
  refetch: () => void;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminInquiryHistoriesChangeStatusModal(
  {
    onClose, modalState, refetch, open
  }: AdminInquiryHistoriesChangeStatusModalProps
) {

  const {
    formMethods, onSubmit
  } = useAdminInquiryHistoriesChangeStatusModal({
    modalState, refetch
  })

  return (
    <Modal
      open={open} onClose={onClose} title='ویرایش وضعیت'
    >
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <ResponseSubmissionStatusField isRequired/>

        <Button type='submit' fullWidth>
          ویرایش
        </Button>
      </ReactHookFormWrapper>
    </Modal>
  );
}

export default AdminInquiryHistoriesChangeStatusModal;
