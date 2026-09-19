import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import {useParams} from "react-router";
import {useMemo} from "react";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import useGetQueryParam from "../../../../../../../hooks/useGetQueryParam.ts";
import {PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS} from "../index.constances.tsx";
import type {EServicePortalDetailItemResponseType} from "../index.types.ts";
import displayDate from "../../../../../../../utils/display/displayDate.ts";

function usePanelBankingInfoEServicePortalHistoryRender() {

  const {id: portalType} = useParams()
  const customerId = useGetQueryParam(QUERY_PARAMS.CUSTOMER_ID)
  const eServiceName = useGetQueryParam(QUERY_PARAMS.NAME)

  const {
    data, isFetching, error
  } = useFetchData<EServicePortalDetailItemResponseType[]>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_SERVICE_PORTAL_DETAIL,
      params: {
        customerId,
        portalType
      }
    }
  })

  const tableData = useMemo(function () {
    const finalData = data?.data || []

    return finalData?.map((item, index) => ({
      id: item?.id,
      [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS.DATE]: displayDate(item?.doneDate),
      [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS.STATUS]: item?.statusTitle,
      [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_HISTORY_TABLE_COLUMNS_KEYS.DESCRIPTION]: item?.description,
    }))
  }, [data])

  return {
    tableData, isFetching, error, eServiceName
  }
}

export default usePanelBankingInfoEServicePortalHistoryRender;
