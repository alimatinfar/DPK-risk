import type {PanelTransactionHistoryPeriodObjectType} from "../../onSite/index.types.ts";
import useGetQueryParam from "../../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";


function useGetTransactionHistoryPeriodDateObject() {
  const periodDateObject = useGetQueryParam(QUERY_PARAMS.PERIOD_DATE_OBJECT)

  return (periodDateObject ? JSON.parse(periodDateObject) : {}) as unknown as PanelTransactionHistoryPeriodObjectType
}

export default useGetTransactionHistoryPeriodDateObject;
