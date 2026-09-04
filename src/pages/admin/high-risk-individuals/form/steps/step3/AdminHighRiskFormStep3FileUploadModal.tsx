import Modal, {type ModalProps} from "../../../../../../components/others/Modal/Modal.tsx";
import Loading from "../../../../../../components/others/Loading/Loading.tsx";
import Button from "../../../../../../components/Form/Button/Button.tsx";
import Message from "../../../../../../components/others/Message/Message.tsx";
import {getResponseErrorMessage} from "../../../../../../request/utils/getResponse.ts";


type Props = {
  error: Error | null;
  uploadLoading: boolean;
  cancelRequestHandler: () => void;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskFormStep3FileUploadModal(
  {
    open, onClose, error, cancelRequestHandler, uploadLoading
  }: Props
) {
  return (
    <Modal
      open={open} onClose={onClose} title='بارگذاری فایل مشتریان'
    >
      <div className='flex flex-col gap-y-6'>
        {error ? (
          <Message color='error' title={getResponseErrorMessage(error)} />
        ) : uploadLoading ? (
          <div className='flex items-center gap-x-2'>
            <p>
              در حال بررسی و بارگذاری فایل
            </p>

            <Loading/>
          </div>
        ) : null}

        <Button
          variant='default' color='white'
          onClick={uploadLoading ? cancelRequestHandler : onClose}
        >
          {uploadLoading ? 'انصراف' : 'بستن'}
        </Button>
      </div>
    </Modal>
  );
}

export default AdminHighRiskFormStep3FileUploadModal;
