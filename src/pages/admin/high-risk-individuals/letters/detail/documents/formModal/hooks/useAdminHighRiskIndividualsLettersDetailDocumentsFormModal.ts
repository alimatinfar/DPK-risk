import {fileTypeFieldName, type FileTypeFieldType} from "../../../../../FormFields/FileTypeField/index.constances.ts";
import {
  descriptionFieldName,
  type DescriptionFieldType
} from "../../../../../FormFields/DescriptionField/index.constances.ts";
import useReactHookFormWrapper
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps
} from "../AdminHighRiskIndividualsLettersDetailDocumentsFormModal.tsx";
import {useEffect} from "react";
import setDefaultValuesFromObject
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/utils/setDefaultValuesFromObject.ts";


type FormDataType = {
  [fileTypeFieldName]: FileTypeFieldType;
  [descriptionFieldName]: DescriptionFieldType;
}

function useAdminHighRiskIndividualsLettersDetailDocumentsFormModal(
  {
    modalState
  }: Pick<AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps, 'modalState'>
) {

  function onSubmitHandler(formData: FormDataType) {
    console.log({formData})
  }

  const {
    onSubmit, formMethods
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  useEffect(function () {
    if (typeof modalState === 'boolean') return

    const defaultValues = {
      [fileTypeFieldName]: modalState?.fileType,
      [descriptionFieldName]: modalState?.description,
      // TODO should set file as default value
    }
    setDefaultValuesFromObject({
      defaultValues, setValue: formMethods.setValue
    })
  }, [modalState])

  return {
    formMethods, onSubmit
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsFormModal;
