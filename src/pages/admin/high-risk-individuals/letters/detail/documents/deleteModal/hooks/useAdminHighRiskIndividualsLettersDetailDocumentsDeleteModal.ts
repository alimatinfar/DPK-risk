import useReactHookFormWrapper
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {
  descriptionFieldName,
  type DescriptionFieldType
} from "../../../../../FormFields/DescriptionField/index.constances.ts";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps
} from "../AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal.tsx";

type FormDataType = {
  [descriptionFieldName]: DescriptionFieldType
}

function useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal(
  {
    modalState
  }: Pick<AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps, 'modalState'>
) {

  function onSubmitHandler(formData: FormDataType) {
    console.log({formData})
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<FormDataType>({
    onSubmitHandler
  })

  return {
    formMethods, onSubmit
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal;
