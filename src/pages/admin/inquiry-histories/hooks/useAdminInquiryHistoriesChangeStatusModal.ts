import useReactHookFormWrapper
  from "../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {useEffect} from "react";
import type {AdminInquiryHistoriesChangeStatusModalProps} from "../AdminInquiryHistoriesChangeStatusModal.tsx";
import {
  responseSubmissionStatusFieldName,
  type ResponseSubmissionStatusFieldType
} from "../FormFields/ResponseSubmissionStatusField/index.constances.ts";
import setDefaultValuesFromObject
  from "../../../../components/Form/FormLayout/ReactHookFormWrapper/utils/setDefaultValuesFromObject.ts";
import useMutateData from "../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../request/constances/apis.ts";
import fireResponseErrorToast from "../../../../request/utils/fireResponseErrorToast.ts";
import toastPromise from "../../../../utils/toastPromise.ts";

type BodyDataType = {

}

type FormDataType = {
  [responseSubmissionStatusFieldName]: ResponseSubmissionStatusFieldType;
}

function useAdminInquiryHistoriesChangeStatusModal(
  {
    modalState, refetch
  }: Pick<AdminInquiryHistoriesChangeStatusModalProps, 'modalState' | 'refetch'>
) {

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  const {
    mutate, isPending
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: APIS.ADMIN_INQUIRY_HISTORIES_CHANGE_RESPONSE_SUBMISSION_STATUS, method: 'POST'
    }
  })

  function onSubmitHandler(formData: FormDataType) {
    const bodyData: BodyDataType = {}

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        toastPromise().then(toast => toast.success('ویرایش وضعیت با موفقیت انجام شد'))
        refetch()
      },
      ...fireResponseErrorToast()
    })
  }

  useEffect(() => {
    if (!modalState) return
    const defaultValues = {
      [responseSubmissionStatusFieldName]: {
        id: modalState?.status, name: modalState?.statusTitle
      }
    }
    setDefaultValuesFromObject({
      defaultValues, setValue: formMethods.setValue
    })
  }, [modalState]);

  return {
    formMethods, onSubmit, loading: isPending
  }
}

export default useAdminInquiryHistoriesChangeStatusModal;
