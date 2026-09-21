import type {AdminInquiryHistoriesChangeStatusModalProps} from "../AdminInquiryHistoriesChangeStatusModal.tsx";
import useMutateData from "../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../request/constances/apis.ts";
import fireResponseErrorToast from "../../../../request/utils/fireResponseErrorToast.ts";
import toastPromise from "../../../../utils/toastPromise.ts";

type BodyDataType = {
  letterId: number;
}

function useAdminInquiryHistoriesChangeStatusModal(
  {
    modalState, refetch, onClose
  }: Pick<AdminInquiryHistoriesChangeStatusModalProps, 'modalState' | 'refetch' | 'onClose'>
) {

  const {
    mutate, isPending
  } = useMutateData<any, BodyDataType>({
    dataInParams: true,
    axiosConfig: {
      url: APIS.ADMIN_INQUIRY_HISTORIES_CHANGE_RESPONSE_SUBMISSION_STATUS, method: 'POST'
    }
  })

  function changeStatusHandler() {
    if (!modalState) return

    const bodyData: BodyDataType = {
      letterId: modalState
    }

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        toastPromise().then(toast => toast.success('ویرایش وضعیت با موفقیت انجام شد'))
        refetch()
        onClose()
      },
      ...fireResponseErrorToast()
    })
  }

  return {
    loading: isPending, changeStatusHandler
  }
}

export default useAdminInquiryHistoriesChangeStatusModal;
