import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import fireResponseErrorToast from "../../../../../../../request/utils/fireResponseErrorToast.ts";
import {useAdminInquiryHistoriesFormStore} from "../../../store/useAdminInquiryHistoriesFormStore.ts";
import useAdminInquiryHistoryFormStep4GetBody from "./useAdminInquiryHistoryFormStep4GetBody.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import type {AdminInquiryHistoryFormBodyDataType} from "../index.types.ts";

function useAdminInquiryHistoryFormStep4() {

  const formStep1Data = useAdminInquiryHistoriesFormStore(state => state.formData.step1)
  const individuals = useAdminInquiryHistoriesFormStore(state => state.formData.step3.individuals)
  const setFormData = useAdminInquiryHistoriesFormStore(state => state.setFormData)

  const {
    mutate, isPending
  } = useMutateData<any, AdminInquiryHistoryFormBodyDataType>({
    axiosConfig: {
      url: APIS.ADMIN_INQUIRY_HISTORIES_ADD, method: 'POST'
    }
  })

  const {
    getBodyData
  } = useAdminInquiryHistoryFormStep4GetBody()

  async function onSubmitHandler() {

    const bodyData = getBodyData()

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        setFormData({formSubmitted: true})
      },
      ...fireResponseErrorToast()
    })
  }

  return {
    individuals, formStep1Data, loading: isPending, onSubmitHandler
  }
}

export default useAdminInquiryHistoryFormStep4;
