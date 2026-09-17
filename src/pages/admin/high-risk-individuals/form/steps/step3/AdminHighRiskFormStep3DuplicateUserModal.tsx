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
  const users = userDuplicateModalState?.users
  const usersIsOne = users?.length === 1

  return (
    <Modal
      open={open} onClose={onClose}
      title='مشتری تکراری'
      description={`
        ${usersIsOne ? 'این مشتری' : 'اطلاعات مشتریان زیر'} قبلا با مرجع ${referenceName} ثبت شده است، آیا مایل به ثبت مجدد هستید؟
      `}
    >
      {usersIsOne ? null : (
        <div className='mb-6 border border-gray-300 rounded-lg p-2 bg-gray-50'>
          <div className='flex flex-col gap-y-2 max-h-50 overflow-auto'>
            {users?.map((user, index) => (
              <div className='flex items-center gap-x-1'>
                <span className='h-1.5 w-1.5 rounded-full bg-gray-400'></span>
                <span key={index} className='text-gray-700 font-medium text-sm'>
                {user}
              </span>
              </div>
            ))}
          </div>
        </div>
      )}

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
