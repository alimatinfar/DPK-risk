import useMutateData from "../../../../request/hooks/useMutateData.ts";
import {
  descriptionFieldName,
  type DescriptionFieldType
} from "../../high-risk-individuals/FormFields/DescriptionField/index.constances.ts";
import fireResponseErrorToast from "../../../../request/utils/fireResponseErrorToast.ts";
import type {AdminInquiryHistoriesDeleteModalProps} from "../AdminInquiryHistoriesDeleteModal.tsx";
import useReactHookFormWrapper
  from "../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";


type BodyDataType = null

type FormDataType = {
  [descriptionFieldName]: DescriptionFieldType
}

function useAdminInquiryHistoriesDeleteModal(
  {
    onClose
  }: Pick<AdminInquiryHistoriesDeleteModalProps, 'onClose'>
) {
  const {
    mutate, error, isPending
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: '', method: 'POST'
    }
  })

  function onSubmitHandler(formData: FormDataType) {

    const bodyData: BodyDataType = null

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

export default useAdminInquiryHistoriesDeleteModal;
