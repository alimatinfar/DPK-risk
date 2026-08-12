import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "./index.types.ts";
import Modal, {type ModalProps} from "../../../../../../components/others/Modal/Modal.tsx";
import ReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper"
import FileTypeField from "../../../FormFields/FileTypeField/FileTypeField";
import useReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper";
import {fileTypeFieldName, type FileTypeFieldType} from "../../../FormFields/FileTypeField/index.constances";
import {descriptionFieldName, type DescriptionFieldType} from "../../../FormFields/DescriptionField/index.constances";
import DescriptionField from "../../../FormFields/DescriptionField/DescriptionField";
import Button from "../../../../../../components/Form/Button/Button";
import UploadBox from "../../../../../../components/others/UploadBox/UploadBox";
import UploadFileField from "../../../FormFields/UploadFileField/UploadFileField";


type FormDataType = {
  [fileTypeFieldName]: FileTypeFieldType;
  [descriptionFieldName]: DescriptionFieldType;
}

type Props = {
  modalState: AdminHighRiskIndividualsLettersDetailDocumentType | boolean;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailDocumentsFormModal(
  {open, onClose, modalState}: Props
) {

  function onSubmitHandler(formData: FormDataType) {
    console.log({formData})
  }

  const {
    onSubmit, formMethods
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  const isEditMode = typeof modalState !== 'boolean'

  return (
    <Modal
      open={open} onClose={onClose}
      title={`${isEditMode ? 'ویرایش' : 'افزودن'} مستند`}
    >
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <FileTypeField/>

        <DescriptionField placeholder='توضیحات مربوط به فایل بارگزاری شده' />

        <UploadFileField />

        <div className='mt-2'>
          <Button
            fullWidth type='submit'
          >
            ثبت
          </Button>
        </div>
      </ReactHookFormWrapper>
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsFormModal;
