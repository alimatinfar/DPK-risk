import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import type {CustomerRiskLevelRangeItemResponseType} from "../index.types.ts";
import type {SetStateType} from "../../../../types/SetStateType.ts";
import type {CalculationState} from "../report/useRiskAnimation.ts";
import {useEffect} from "react";


type Props = {
  setCalculationState: SetStateType<CalculationState>;
}

function useRiskReportLevelRange(
  {setCalculationState}: Props
) {

  const {
    data, isFetching, error
  } = useFetchData<CustomerRiskLevelRangeItemResponseType[]>({
    axiosConfig: {
      url: APIS.CUSTOMER_RISK_LEVEL_RANGE,
    }
  })

  useEffect(() => {
    if (!error) return
    setCalculationState('error')
  }, [error]);

  return {
    levelRangeData: data?.data, levelRangeLoading: isFetching
  }
}

export default useRiskReportLevelRange;
