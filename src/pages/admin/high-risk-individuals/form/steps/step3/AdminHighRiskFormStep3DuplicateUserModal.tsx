import Button from "../../../../../../components/Form/Button/Button";
import type {ModalProps} from "../../../../../../components/others/Modal/Modal";
import Modal from "../../../../../../components/others/Modal/Modal";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore";
import {announceReferenceFieldName} from "../../../FormFields/AnnouncingReferenceField/index.constances";


type Props = {
  userDuplicateModalState: (() => void) | undefined;
} & Pick<ModalProps, 'onClose' | 'open'>

function AdminHighRiskFormStep3DuplicateUserModal(
  {onClose, open, userDuplicateModalState}: Props
) {

  const step1Data = useAdminHighRiskIndividualsFormStore(
    state => state.formData.step1
  )
  const referenceName = step1Data?.[announceReferenceFieldName] ? step1Data?.[announceReferenceFieldName]?.name : ''

  return (
    <Modal
      open={open} onClose={onClose}
      title='مشتری تکراری'
      description={`این مشتری قبلا با مرجع ${referenceName} ثبت شده است، آیا مایل به ثبت مجدد هستید؟`}
    >
      <div className='grid grid-cols-2 gap-4'>
        <Button
          variant='default' color='white'
          onClick={onClose}
        >
          انصراف
        </Button>

        <Button
          variant='default' color='white'
          onClick={userDuplicateModalState}
        >
          ثبت اطلاعات
        </Button>
      </div>
    </Modal>
  );
}

export default AdminHighRiskFormStep3DuplicateUserModal;