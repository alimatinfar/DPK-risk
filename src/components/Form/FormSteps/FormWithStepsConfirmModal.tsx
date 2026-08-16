import Button from "../Button/Button.tsx";
import Modal, {type ModalProps} from "../../others/Modal/Modal.tsx";


type Props = {
  onClick: () => void
} & Pick<ModalProps, 'open' | 'onClose'>

function FormWithStepsConfirmModal(
  {onClick, open, onClose}: Props
) {
  return (
    <Modal
      title='شما یک فرم تکمیل نشده دارید.'
      description='آیا میخواهید فرم جدید ثبت کنید؟'
      open={open} onClose={onClose}
    >
      <div className='grid grid-cols-2 gap-x-4 w-full mr-auto'>
        <Button size='sm' variant='outlined' onClick={onClose}>
          ادامه درخواست قبلی
        </Button>
        <Button size='sm' onClick={onClick}>
          درخواست جدید
        </Button>
      </div>
    </Modal>
  );
}

export default FormWithStepsConfirmModal
