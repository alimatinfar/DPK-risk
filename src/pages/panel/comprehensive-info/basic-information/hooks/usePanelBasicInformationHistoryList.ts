import { useMemo } from "react";
import type {
  HistoryDataType,
  PanelBasicInfoHistoriesResponseType,
} from "../index.types.ts";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import displayDate from "../../../../../utils/display/displayDate.ts";


function usePanelBasicInformationHistoryList() {

  const {getActivePersonNationalId, isLegalBool, isNaturalBool} = getActivePersonData()

  const apiUrl = isNaturalBool ? APIS.GET_NATURAL_CUSTOMER_HISTORY :
    isLegalBool ? APIS.GET_LEGAL_CUSTOMER_HISTORY : APIS.GET_FOREIGN_CITIZEN_CUSTOMER_HISTORY

  const {
    data, isFetching, error
  } = useFetchData<PanelBasicInfoHistoriesResponseType>({
    axiosConfig: {
      url: apiUrl,
      method: "GET",
      params: {
        nationalID: getActivePersonNationalId()
      }
    }
  })

  const infoHistoryList: HistoryDataType[] = useMemo(function () {
    const historiesList = data?.data

    if (!historiesList) return []

    return [...historiesList]?.reverse()?.map((item, index) => ({
      id: item.id,
      date: displayDate(item.changeLastDate),
      location: item.changeLastReason,
      isLasted: index === 0
    }))
  }, [data])

  return {
    infoHistoryList, historiesLoading: isFetching, historiesError: error
  }
}

export default usePanelBasicInformationHistoryList;
