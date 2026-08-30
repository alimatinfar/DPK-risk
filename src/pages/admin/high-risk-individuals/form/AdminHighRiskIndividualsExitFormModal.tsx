import Modal, {type ModalProps} from "../../../../components/others/Modal/Modal.tsx";
import Button from "../../../../components/Form/Button/Button.tsx";


type Props = {
  exitFormHandler: () => void
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsExitFormModal(
  {open, onClose, exitFormHandler}: Props
) {
  return (
    <Modal
      open={open} onClose={onClose}
      title='انصراف از فرایند'
      description='شما اطلاعاتی را وارد کرده‌اید که هنوز ذخیره نشده است. آیا از خروج اطمینان دارید ؟'
    >
      <div className='grid grid-cols-2 gap-x-4'>
        <Button
          onClick={onClose} variant='default' color='white'
        >
          بازگشت
        </Button>

        <Button
          onClick={exitFormHandler} color='red'
        >
          انصراف و بستن فرم
        </Button>
      </div>
    </Modal>
  );
}

export default AdminHighRiskIndividualsExitFormModal;
