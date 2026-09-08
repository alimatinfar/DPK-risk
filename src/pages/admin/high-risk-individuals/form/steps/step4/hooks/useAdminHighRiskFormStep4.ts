import {useAdminHighRiskIndividualsFormStore} from "../../../store/useAdminHighRiskIndividualsFormStore.ts";
import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import fireResponseErrorToast from "../../../../../../../request/utils/fireResponseErrorToast.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import type {AdminHighRiskFormBodyDataType} from "../index.types.ts";
import useAdminHighRiskFormStep4GetBody from "./useAdminHighRiskFormStep4GetBody.ts";
import {useNavigate} from "react-router";


function useAdminHighRiskFormStep4() {

  const formStep1Data = useAdminHighRiskIndividualsFormStore(state => state.formData.step1)
  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)

  const navigate = useNavigate()

  const {
    mutate, isPending
  } = useMutateData<any, AdminHighRiskFormBodyDataType>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_ADD_CUSTOMER, method: 'POST'
    }
  })

  const {
    getBodyData
  } = useAdminHighRiskFormStep4GetBody()

  async function onSubmitHandler() {

    const bodyData = await getBodyData()

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        setFormData({formSubmitted: true})
      },
      ...fireResponseErrorToast()
    })
  }

  return {
    formStep1Data, individuals, onSubmitHandler, loading: isPending
  }
}

export default useAdminHighRiskFormStep4;
