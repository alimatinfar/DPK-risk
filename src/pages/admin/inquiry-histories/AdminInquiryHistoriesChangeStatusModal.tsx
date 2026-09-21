import Modal, {type ModalProps} from "../../../components/others/Modal/Modal.tsx";
import Button from "../../../components/Form/Button/Button.tsx";
import useAdminInquiryHistoriesChangeStatusModal from "./hooks/useAdminInquiryHistoriesChangeStatusModal.ts";


export type AdminInquiryHistoriesChangeStatusModalProps = {
  modalState: number | null;
  refetch: () => void;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminInquiryHistoriesChangeStatusModal(
  {
    onClose, modalState, refetch, open
  }: AdminInquiryHistoriesChangeStatusModalProps
) {

  const {
    loading, changeStatusHandler
  } = useAdminInquiryHistoriesChangeStatusModal({
    modalState, refetch, onClose
  })

  return (
    <Modal
      open={open} onClose={onClose}
      title='ویرایش وضعیت'
      description={(
        <div>
          آیا از تغییر وضعیت نامه به <span className='font-semibold'>"ارسال پاسخ"</span> اطمینان دارید؟
        </div>
      )}
    >
      <div className='grid grid-cols-2 gap-4'>
        <Button
          variant='default' color='white' onClick={onClose}
        >
          انصراف
        </Button>
        <Button
          loading={loading} onClick={changeStatusHandler}
        >
          تایید
        </Button>
      </div>
    </Modal>
  );
}

export default AdminInquiryHistoriesChangeStatusModal;
