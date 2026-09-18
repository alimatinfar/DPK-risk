import useMutateData from "../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import type {SearchPageFormDataType} from "../../../../search/form/SearchPageForm.types.ts";
import toastPromise from "../../../../../utils/toastPromise.ts";
import fireResponseErrorToast from "../../../../../request/utils/fireResponseErrorToast.ts";
import useReactHookFormWrapper
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {
  AdminInquiryHistoryDetailIndividualsDeleteModalProps
} from "../AdminInquiryHistoryDetailIndividualsDeleteModal.tsx";


type BodyDataType = {
  id: number;
  inquiryLetterId: number;
  customerId: number;
}

function useAdminInquiryHistoryDetailIndividualsDeleteModal(
  {
    onClose, refetch, modalState
  }: Pick<AdminInquiryHistoryDetailIndividualsDeleteModalProps,
    'onClose' | 'refetch' | 'modalState'
  >
) {

  const {
    mutate, isPending: loading
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: APIS.GET_CUSTOMERS, method: 'POST'
    }
  })

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  function onSubmitHandler(formData: SearchPageFormDataType) {

    const bodyData: BodyDataType = {
      id: 0,
      inquiryLetterId: 0,
      customerId: 0,
    }

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        toastPromise().then(toast => toast.success('شخص با موفقیت حذف شد'))
        onClose()
        refetch()
      },
      ...fireResponseErrorToast()
    })
  }

  return {
    loading, formMethods, onSubmit
  }
}

export default useAdminInquiryHistoryDetailIndividualsDeleteModal;
