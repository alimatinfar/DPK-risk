import Modal, {type ModalProps} from "../../../../components/others/Modal/Modal.tsx";
import Button from "../../../../components/Form/Button/Button.tsx";
import {useNavigate} from "react-router";
import ROUTER_LINKS from "../../../../constances/routerLinks.ts";
import {useAdminHighRiskIndividualsFormStore} from "./store/useAdminHighRiskIndividualsFormStore.ts";


type Props = Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsExitFormModal(
  {open, onClose}: Props
) {

  const clearForm = useAdminHighRiskIndividualsFormStore(state => state.clearForm)

  const navigate = useNavigate()

  function exitFormHandler() {
    clearForm()
    navigate(ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL)
  }

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
