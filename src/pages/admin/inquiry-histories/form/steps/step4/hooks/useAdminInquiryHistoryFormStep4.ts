import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import fireResponseErrorToast from "../../../../../../../request/utils/fireResponseErrorToast.ts";
import {useAdminInquiryHistoriesFormStore} from "../../../store/useAdminInquiryHistoriesFormStore.ts";


type BodyDataType = null

function useAdminInquiryHistoryFormStep4() {

  const formStep1Data = useAdminInquiryHistoriesFormStore(state => state.formData.step1)
  const individuals = useAdminInquiryHistoriesFormStore(state => state.formData.step3.individuals)
  const setFormData = useAdminInquiryHistoriesFormStore(state => state.setFormData)

  const {
    mutate, isPending
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: '', method: 'POST'
    }
  })

  async function onSubmitHandler() {

    const bodyData = null

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
