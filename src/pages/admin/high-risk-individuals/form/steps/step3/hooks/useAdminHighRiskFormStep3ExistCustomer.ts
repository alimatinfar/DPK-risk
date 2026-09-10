import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import type {ResultCardDataTypeShareFields} from "../../../../../../search/result/ResultCard.types.ts";
import type {
  AdminHighRiskFormStep3ExistCustomerBodyDataType,
  AdminHighRiskFormStep3ExistCustomerResponseItemType
} from "../index.types.ts";



function useAdminHighRiskFormStep3ExistCustomer() {

  const {
    mutate, isPending
  } = useMutateData<AdminHighRiskFormStep3ExistCustomerResponseItemType[], AdminHighRiskFormStep3ExistCustomerBodyDataType>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_EXIST_CUSTOMER, method: 'POST'
    }
  })

  async function checkExistCustomer(customerId: ResultCardDataTypeShareFields['customerId']) {
    return new Promise((resolve, reject) => {
      const bodyData: AdminHighRiskFormStep3ExistCustomerBodyDataType = [customerId]

      mutate(bodyData, {
        onSuccess: (data, variables, onMutateResult, context) => {
          resolve(data)
        },
        onError: reject
      })
    })
  }

  return {
    checkExistCustomer, checkExistCustomerLoading: isPending
  }
}

export default useAdminHighRiskFormStep3ExistCustomer;
