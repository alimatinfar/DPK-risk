import useReactHookFormWrapper
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {
  descriptionFieldName,
  type DescriptionFieldType
} from "../../../../../FormFields/DescriptionField/index.constances.ts";
import useMutateData from "../../../../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import fireResponseErrorToast from "../../../../../../../../request/utils/fireResponseErrorToast.ts";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContentProps
} from "../AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent.tsx";


//TODO should added description field to body data
type BodyDataType = {
  documentId: string | number | null;
}

type FormDataType = {
  [descriptionFieldName]: DescriptionFieldType
}

function useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal(
  {
    modalState, onClose, apiAddress
  }: Pick<AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContentProps,
    'modalState' | 'onClose' | 'apiAddress'
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
      documentId: modalState && modalState !== true ? modalState?.id : null
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
