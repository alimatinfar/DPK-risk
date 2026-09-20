import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import getActivePersonData from "../../utils/getActivePersonData.ts";
import type {CustomerRiskResponseType} from "../index.types.ts";

function usePanelCustomerRiskPage() {

  const {activePersonData} = getActivePersonData();

  const {
    data, isFetching, error, refetch
  } = useFetchData<CustomerRiskResponseType>({
    queryKey: [activePersonData?.customerId],
    axiosConfig: {
      url: APIS.CUSTOMER_RISK_CALCULATOR,
      params: {
        customerId: activePersonData?.customerId
      }
    },
    options: {
      enabled: false,
      gcTime: 0
    }
  })

  return {
    responseData: data, loading: isFetching, fetchRiskData: refetch, error
  }
}

export default usePanelCustomerRiskPage;
