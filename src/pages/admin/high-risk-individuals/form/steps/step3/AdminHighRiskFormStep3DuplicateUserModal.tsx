import Button from "../../../../../../components/Form/Button/Button";
import type {ModalProps} from "../../../../../../components/others/Modal/Modal";
import Modal from "../../../../../../components/others/Modal/Modal";
import {announceReferenceFieldName} from "../../../FormFields/AnnouncingReferenceField/index.constances";
import type {AdminHighRiskFormStep3ShareProps} from "./AdminHighRiskFormStep3Share.tsx";


export type AdminHighRiskFormStep3DuplicateUserModalProps = {
  userDuplicateModalState: {callback: () => () => void, users?: string[]} | undefined;
} & Pick<ModalProps, 'onClose' | 'open'>
  & Pick<AdminHighRiskFormStep3ShareProps, 'formDataStep1'>

function AdminHighRiskFormStep3DuplicateUserModal(
  {
    onClose, open, userDuplicateModalState, formDataStep1
  }: AdminHighRiskFormStep3DuplicateUserModalProps
) {

  const referenceName = formDataStep1?.[announceReferenceFieldName] ? formDataStep1?.[announceReferenceFieldName]?.name : ''

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
          onClick={() => userDuplicateModalState?.callback() ? userDuplicateModalState?.callback()?.() : null}
        >
          ثبت اطلاعات
        </Button>
      </div>
    </Modal>
  );
}

export default AdminHighRiskFormStep3DuplicateUserModal;
