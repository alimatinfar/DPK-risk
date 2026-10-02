import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import type {AdminRiskTreeResponseDataType, RiskIndicatorType} from "../index.types.ts";
import {useMemo} from "react";


function useAdminRiskTreeFetchData() {

  const {
    data, isFetching, error
  } = useFetchData<AdminRiskTreeResponseDataType>({
    axiosConfig: {
      url: APIS.ADMIN_RISK_SETTING_TREE_DATA,
    }
  })

  const tree: RiskIndicatorType[] = useMemo(function () {
    const listData = data?.data || []

    return listData.map((riskType) => ({
      id: String(riskType.id),
      title: riskType.riskTypeName,
      weight: riskType.weight,

      groups: riskType.riskGroups.map((group) => ({
        id: String(group.id),
        title: group.groupName,
        weight: group.weight,

        indicators: group.riskIndicators.map((indicator) => ({
          id: String(indicator.id),
          title: indicator.indicatorName,
          weight: indicator.weight,

          subIndicators: indicator.riskSubIndicators.map((subIndicator) => ({
            id: String(subIndicator.id),
            title: subIndicator.subIndicatorName.trim(),
            weight: subIndicator.riskPoint,
          })),
        })),
      })),
    }));
  }, [data])

  return {
    tree
  }
}

export default useAdminRiskTreeFetchData;
