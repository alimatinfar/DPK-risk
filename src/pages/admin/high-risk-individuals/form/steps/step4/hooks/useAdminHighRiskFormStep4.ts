import {useAdminHighRiskIndividualsFormStore} from "../../../store/useAdminHighRiskIndividualsFormStore.ts";
import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import fireResponseErrorToast from "../../../../../../../request/utils/fireResponseErrorToast.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import type {AdminHighRiskFormBodyDataType} from "../index.types.ts";
import useAdminHighRiskFormStep4GetBody from "./useAdminHighRiskFormStep4GetBody.ts";
import {useNavigate} from "react-router";
import ROUTER_LINKS from "../../../../../../../constances/routerLinks.ts";
import toastPromise from "../../../../../../../utils/toastPromise.ts";

function useAdminHighRiskFormStep4() {

  const formStep1Data = useAdminHighRiskIndividualsFormStore(state => state.formData.step1)
  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)

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

  function onSubmitHandler() {

    const bodyData = getBodyData()

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        navigate(ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL)
        toastPromise().then(toast => toast.error('ثبت افراد پر ریسک با موفقیت انجام شد'))
      },
      ...fireResponseErrorToast()
    })
  }

  return {
    formStep1Data, individuals, onSubmitHandler, loading: isPending
  }
}

export default useAdminHighRiskFormStep4;
