import Modal, {type ModalProps} from "../../../components/others/Modal/Modal.tsx";
import DescriptionField from "../high-risk-individuals/FormFields/DescriptionField/DescriptionField.tsx";
import Button from "../../../components/Form/Button/Button.tsx";
import ReactHookFormWrapper from "../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import useAdminInquiryHistoriesDeleteModal from "./hooks/useAdminInquiryHistoriesDeleteModal.ts";


export type AdminInquiryHistoriesDeleteModalProps = {
  modalState: number | null;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminInquiryHistoriesDeleteModal(
  {
    modalState, open, onClose
  }: AdminInquiryHistoriesDeleteModalProps
) {

  const {
    formMethods, onSubmit, loading
  } = useAdminInquiryHistoriesDeleteModal({
    onClose
  })

  return (
    <Modal
      open={open} onClose={onClose}
      title='حذف سابقه استعلام'
      description='آیا از حذف سابقه انتخاب شده اطمینان دارید ؟'
    >
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <DescriptionField/>

        <div className='grid grid-cols-2 gap-x-4 mt-2'>
          <Button
            variant='default' color='white'
            onClick={onClose}
          >
            انصراف
          </Button>

          <Button
            color='red' type='submit' loading={loading}
          >
            حذف
          </Button>
        </div>
      </ReactHookFormWrapper>
    </Modal>
  );
}

export default AdminInquiryHistoriesDeleteModal;
