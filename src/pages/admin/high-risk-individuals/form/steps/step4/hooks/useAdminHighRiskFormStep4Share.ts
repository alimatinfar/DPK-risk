import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import type {AdminHighRiskFormBodyDataType} from "../index.types.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import useAdminHighRiskFormStep4GetBody from "./useAdminHighRiskFormStep4GetBody.ts";
import fireResponseErrorToast from "../../../../../../../request/utils/fireResponseErrorToast.ts";
import type {AdminHighRiskFormStep4ShareProps} from "../AdminHighRiskFormStep4Share.tsx";


type Props = Pick<AdminHighRiskFormStep4ShareProps, 'setFormData'>

function useAdminHighRiskFormStep4Share(
  {
    setFormData
  }: Props
) {

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
    onSubmitHandler, loading: isPending
  }
}

export default useAdminHighRiskFormStep4Share;
