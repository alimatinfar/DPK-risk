import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import fireResponseErrorToast from "../../../../../../../request/utils/fireResponseErrorToast.ts";
import type {ResultCardDataTypeShareFields} from "../../../../../../search/result/ResultCard.types.ts";


type BodyDataType = (number | string)[]

function useAdminHighRiskFormStep3ExistCustomer() {

  const {
    mutate, isPending
  } = useMutateData<any, BodyDataType>({
    dataInParams: true,
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_EXIST_CUSTOMER, method: 'POST'
    }
  })

  async function checkExistCustomer(customerId: ResultCardDataTypeShareFields['customerId']) {
    return new Promise((resolve) => {
      const bodyData: BodyDataType = [customerId]

      mutate(bodyData, {
        onSuccess: (data, variables, onMutateResult, context) => {
          resolve(data)
        },
        ...fireResponseErrorToast()
      })
    })
  }

  return {
    checkExistCustomer, checkExistCustomerLoading: isPending
  }
}

export default useAdminHighRiskFormStep3ExistCustomer;
