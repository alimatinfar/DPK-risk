import useReactHookFormWrapper
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {
  descriptionFieldName,
  type DescriptionFieldType
} from "../../../../../FormFields/DescriptionField/index.constances.ts";
import useMutateData from "../../../../../../../../request/hooks/useMutateData.ts";
import fireResponseErrorToast from "../../../../../../../../request/utils/fireResponseErrorToast.ts";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContentProps
} from "../AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent.tsx";


type BodyDataType = {
  letterId: number | string;
  documentId: string | number | null;
  description: string;
}

type FormDataType = {
  [descriptionFieldName]: DescriptionFieldType
}

function useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal(
  {
    modalState, onClose, apiAddress, letterId
  }: Pick<AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContentProps,
    'modalState' | 'onClose' | 'apiAddress' | 'letterId'
  >
) {

  const {
    mutate, data, error, isPending
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: apiAddress, method: 'POST'
    }
  })

  function onSubmitHandler(formData: FormDataType) {

    const bodyData: BodyDataType = {
      letterId,
      documentId: modalState && modalState !== true ? modalState?.id : null,
      description: formData?.[descriptionFieldName]
    }

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        onClose()
      },
      ...fireResponseErrorToast()
    })
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<FormDataType>({
    onSubmitHandler
  })

  return {
    formMethods, onSubmit, loading: isPending
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal;
