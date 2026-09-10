import {fileTypeFieldName} from "../../../../../FormFields/FileTypeField/index.constances.ts";
import {
  descriptionFieldName,
} from "../../../../../FormFields/DescriptionField/index.constances.ts";
import useReactHookFormWrapper
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {useEffect} from "react";
import setDefaultValuesFromObject
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/utils/setDefaultValuesFromObject.ts";
import type {AdminHighRiskIndividualsDocumentFormDataType} from "../../../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";
import useMutateData from "../../../../../../../../request/hooks/useMutateData.ts";
import fireResponseErrorToast from "../../../../../../../../request/utils/fireResponseErrorToast.ts";
import {REQUEST_HEADERS} from "../../../../../../../../request/utils/requestHeaders.ts";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentsFormModalContentProps
} from "../AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent.tsx";
import getSelectIdValue from "../../../../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import type {SelectOptionType} from "../../../../../../../../components/Form/Select/select-exports.ts";
import {uploadFileFieldName} from "../../../../../FormFields/UploadFileField/index.constances.ts";

type BodyDataType = {
  documentType: SelectOptionType['id'] | null;
  name: string;
  description: string;
  content: string;
  letterId?: number | string;
}

type Props = Pick<AdminHighRiskIndividualsLettersDetailDocumentsFormModalContentProps,
  'onClose' | 'modalState' | 'apiAddress' | 'isEditMode'
>

function useAdminHighRiskIndividualsLettersDetailDocumentsFormModal(
  {modalState, onClose, apiAddress, isEditMode}: Props
) {
  const {
    mutate, isPending
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: apiAddress,
      method: 'POST'
    }
  })

  function onSubmitHandler(formData: AdminHighRiskIndividualsDocumentFormDataType) {

    const bodyData = {
      documentType: getSelectIdValue(formData[fileTypeFieldName]),
      name: formData[uploadFileFieldName]?.name || '',
      description: formData[descriptionFieldName],
      content: formData[uploadFileFieldName]?.data,
      ...isEditMode ? {letterId: (modalState && modalState !== true) ? modalState?.id : ''} : {}
    }

    mutate(bodyData, {
      onSuccess: (data) => {
        onClose()
      },
      ...fireResponseErrorToast()
    })
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
    formMethods, onSubmit, loading: isPending
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsFormModal;
