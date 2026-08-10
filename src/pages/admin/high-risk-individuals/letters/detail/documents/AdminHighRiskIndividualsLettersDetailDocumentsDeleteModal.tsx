import Modal, {type ModalProps} from "../../../../../../components/others/Modal/Modal.tsx";
import DescriptionField from "../../../FormFields/DescriptionField/DescriptionField.tsx";
import ReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import Button from "../../../../../../components/Form/Button/Button.tsx";
import useReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {
  descriptionFieldName,
  type DescriptionFieldType
} from "../../../FormFields/DescriptionField/index.constances.ts";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "./index.types.ts";


type FormDataType = {
  [descriptionFieldName]: DescriptionFieldType
}

type Props = {
  modalState: AdminHighRiskIndividualsLettersDetailDocumentType | boolean;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal(
  {open, onClose, modalState}: Props
) {

  function onSubmitHandler(formData: FormDataType) {
    console.log({formData})
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<FormDataType>({
    onSubmitHandler
  })

  return (
    <Modal
      open={open} onClose={onClose} title='حذف مستند'
      description='ايا از انجام عمليات حذف اطمينان داريد؟'
    >
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <DescriptionField/>

        <div className='grid grid-cols-2 gap-x-4'>
          <Button
            variant='default' color='white'
          >
            انصراف
          </Button>

          <Button
            color='red'
          >
            حذف
          </Button>
        </div>
      </ReactHookFormWrapper>
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal;
