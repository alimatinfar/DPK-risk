import {
  PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS_KEYS, PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_FAKE_DATA,
} from "../index.constances.ts";
import useGetQueryParam from "../../../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../../../constances/queryParams.ts";
import {useNavigate, useParams} from "react-router";
import {useMemo} from "react";
import TABLE_ACCESSORS from "../../../../../../../../components/others/Table/constances/tableAccessors.ts";
import {
  TableDetailAction
} from "../../../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import ROUTER_LINKS from "../../../../../../../../constances/routerLinks.ts";
import type {
  PanelTransactionHistoryPeriodObjectType
} from "../../../onSite/index.types.ts";
import getUrlWithParams from "../../../../../../../../utils/getUrlWithParams.ts";
import type {
  PanelTransactionHistoryEServiceDetailRenderProps
} from "../PanelTransactionHistoryEServiceDetailRender.tsx";
import useFetchData from "../../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import getActivePersonData from "../../../../../../utils/getActivePersonData.ts";
import getJalaliMonthName from "../../../../../../../../utils/dateAndTIme/momentJalaliDateTime/getJalaliMonthName.ts";
import getPrevYearDateRange from "../../../utils/getPrevYearDateRange.ts";
import getMonthDateRangeQueryParams from "../../../utils/getMonthDateRangeQueryParams.ts";
import type {PanelTransactionHistoryEServiceDetailItemResponseType} from "../index.types.ts";
import withSeparator from "../../../../../../../../utils/separator/withSeparator.ts";

function usePanelTransactionHistoryEServiceDetailRender(
  {isJoint}: Pick<PanelTransactionHistoryEServiceDetailRenderProps, 'isJoint'>
) {

  const {activePersonData} = getActivePersonData();

  const queryParamsCustomerId = useGetQueryParam(QUERY_PARAMS.CUSTOMER_ID)
  const customerId = queryParamsCustomerId || activePersonData?.customerId

  const eServiceLabel = useGetQueryParam(QUERY_PARAMS.NAME)

  const navigate = useNavigate()

  const {eServiceId} = useParams()

  const {
    data, isFetching, error
  } = useFetchData<PanelTransactionHistoryEServiceDetailItemResponseType[]>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_TRANSACTION_AGGREGATE_BY_PORT,
      params: {
        ...getPrevYearDateRange(),
        customerId,
        codedargah: eServiceId
      }
    }
  })

  const tableData = useMemo(function () {
    const finalData = data?.data
    // const finalData = PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_FAKE_DATA
    if (!finalData) return []

    return finalData?.map((item, index) => ({
      id: index,
      [PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS_KEYS.MONTH]: `${getJalaliMonthName(item?.month)} ${item?.year}`,
      [PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS_KEYS.TRANSACTION_COUNT]: item?.totalCount,
      [PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS_KEYS.TOTAL_CREDITOR]: withSeparator(item?.totalCredit),
      [PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS_KEYS.TOTAL_DEBTOR]: withSeparator(item?.totalDebit),
      [PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS_KEYS.BALANCE]: withSeparator(item?.totalCreditTotalDebit),
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          const url = isJoint ? ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL(String(eServiceId), String(index)) : ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL(String(eServiceId), String(index))
          const periodDateObject: PanelTransactionHistoryPeriodObjectType = {
            monthName: getJalaliMonthName(item.month),
            year: item?.year,
            ...getMonthDateRangeQueryParams(item?.year, item?.month),
          }
          const params = {
            [QUERY_PARAMS.PERIOD_DATE_OBJECT]: JSON.stringify(periodDateObject),
            [QUERY_PARAMS.NAME]: eServiceLabel,
          }
          navigate(getUrlWithParams(url, params))
        }, 'ریز تراکنش‌ها')
      ],
    }))
  }, [data])

  return {
    eServiceLabel, tableData, isFetching, error
  }
}

export default usePanelTransactionHistoryEServiceDetailRender;
