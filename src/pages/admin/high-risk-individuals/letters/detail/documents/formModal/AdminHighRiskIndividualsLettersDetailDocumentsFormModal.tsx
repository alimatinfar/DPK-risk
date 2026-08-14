import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";
import Modal, {type ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";
import ReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx"
import FileTypeField from "../../../../FormFields/FileTypeField/FileTypeField.tsx";
import DescriptionField from "../../../../FormFields/DescriptionField/DescriptionField.tsx";
import Button from "../../../../../../../components/Form/Button/Button.tsx";
import UploadFileField from "../../../../FormFields/UploadFileField/UploadFileField.tsx";
import useAdminHighRiskIndividualsLettersDetailDocumentsFormModal
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocumentsFormModal.ts";


export type AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps = {
  modalState: AdminHighRiskIndividualsLettersDetailDocumentType | boolean;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailDocumentsFormModal(
  {open, onClose, modalState}: AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps
) {

  const {
    isEditMode, formMethods, onSubmit
  } = useAdminHighRiskIndividualsLettersDetailDocumentsFormModal({
    modalState
  })

  return (
    <Modal
      open={open} onClose={onClose}
      title={`${isEditMode ? 'ویرایش' : 'افزودن'} مستند`}
    >
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <FileTypeField/>

        <DescriptionField placeholder='توضیحات مربوط به فایل بارگزاری شده'/>

        <UploadFileField/>

        <div className='mt-2'>
          <Button
            fullWidth type='submit'
          >
            {isEditMode ? 'ویرایش' : 'ثبت'}
          </Button>
        </div>
      </ReactHookFormWrapper>
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsFormModal;
