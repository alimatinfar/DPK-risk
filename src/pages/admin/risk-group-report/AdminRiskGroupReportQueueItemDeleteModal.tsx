import Modal, {type ModalProps} from "../../../components/others/Modal/Modal.tsx";
import Button from "../../../components/Form/Button/Button.tsx";


type Props = {
  reportId: number;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminRiskGroupReportQueueItemDeleteModal(
  {open, onClose, reportId}: Props
) {

  function deleteReportHandler() {
    //TODO should be completed
  }

  return (
    <Modal
      open={open} onClose={onClose}
      title='حذف از صف گزارش'
      description='آیا از حذف گزارش انتخاب شده اطمینان دارید؟'
    >
      <div className='grid grid-cols-2 gap-x-6'>
        <Button
          variant='default' color='white' fullWidth
          onClick={onClose}
        >
          انصراف
        </Button>
        <Button
          color='red' fullWidth
          onClick={deleteReportHandler}
        >
          حذف گزارش
        </Button>
      </div>
    </Modal>
  );
}

export default AdminRiskGroupReportQueueItemDeleteModal;
