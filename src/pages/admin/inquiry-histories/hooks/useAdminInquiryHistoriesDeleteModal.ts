import useMutateData from "../../../../request/hooks/useMutateData.ts";
import {
  descriptionFieldName,
  type DescriptionFieldType
} from "../../high-risk-individuals/FormFields/DescriptionField/index.constances.ts";
import fireResponseErrorToast from "../../../../request/utils/fireResponseErrorToast.ts";
import type {AdminInquiryHistoriesDeleteModalProps} from "../AdminInquiryHistoriesDeleteModal.tsx";
import useReactHookFormWrapper
  from "../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import APIS from "../../../../request/constances/apis.ts";


type BodyDataType = {
  inquiryLetterId: number | string | null;
  description: string;
}

type FormDataType = {
  [descriptionFieldName]: DescriptionFieldType
}

function useAdminInquiryHistoriesDeleteModal(
  {
    onClose, modalState
  }: Pick<AdminInquiryHistoriesDeleteModalProps, 'onClose' | 'modalState'>
) {
  const {
    mutate, error, isPending
  } = useMutateData<any, BodyDataType>({
    dataInParams: true,
    axiosConfig: {
      url: APIS.ADMIN_INQUIRY_HISTORIES_DELETE, method: 'POST'
    }
  })

  function onSubmitHandler(formData: FormDataType) {

    const bodyData: BodyDataType = {
      inquiryLetterId: modalState,
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

export default useAdminInquiryHistoriesDeleteModal;
