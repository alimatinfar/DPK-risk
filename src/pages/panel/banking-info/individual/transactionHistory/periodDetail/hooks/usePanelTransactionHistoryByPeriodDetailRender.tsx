import {useNavigate} from "react-router";
import useGetTransactionHistoryPeriodDateObject from "./useGetTransactionHistoryPeriodDateObject.ts";
import {useMemo} from "react";
import {
  PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS,
  PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_FAKE_DATA
} from "../index.constances.tsx";
import TABLE_ACCESSORS from "../../../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import ROUTER_LINKS from "../../../../../../../constances/routerLinks.ts";
import type {TransactionHistoryBranchItemResponseType, TransactionHistoryBranchObjectType} from "../index.types.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import getUrlWithParams from "../../../../../../../utils/getUrlWithParams.ts";
import type {
  PanelTransactionHistoryByPeriodDetailRenderProps
} from "../PanelTransactionHistoryByPeriodDetailRender.tsx";
import useGetQueryParam from "../../../../../../../hooks/useGetQueryParam.ts";
import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import Tag from "../../../../../../../components/others/Tag/Tag.tsx";
import withSeparator from "../../../../../../../utils/separator/withSeparator.ts";


function usePanelTransactionHistoryByPeriodDetailRender(
  {isJoint}: Pick<PanelTransactionHistoryByPeriodDetailRenderProps, 'isJoint'>
) {

  const customerId = useGetQueryParam(QUERY_PARAMS.CUSTOMER_ID)
  const isMaxCount = useGetQueryParam(QUERY_PARAMS.IS_MAX_COUNT)

  const apiUrl = isMaxCount ?
    APIS.BANK_INFO_GET_MAX_COUNT_TRANSACTION_HISTORY_BRANCH_INFO :
    APIS.BANK_INFO_GET_MAX_AMOUNT_TRANSACTION_HISTORY_BRANCH_INFO

  const {
    data, isFetching, error
  } = useFetchData<TransactionHistoryBranchItemResponseType[]>({
    axiosConfig: {
      url: apiUrl,
      params: {
        customerId
      }
    }
  })

  const periodDateObject = useGetTransactionHistoryPeriodDateObject()
  const {monthName, year} = periodDateObject

  const navigate = useNavigate()

  const tableData = useMemo(function () {
    const finalData = PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_FAKE_DATA
    // const finalData = data?.data
    if (!finalData) return []

    return finalData?.map((item, index) => ({
      id: 1,
      [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BRANCH_CODE]: item?.branchCode,
      [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BRANCH_NAME]: item?.branchName,
      [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.REGION_CODE]: item?.areaCode,
      [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.REGION_NAME]: item?.areaName,
      [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.VISIT_COUNT]: item?.totalCount,
      [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.TOTAL_CREDITOR]: withSeparator(item?.totalCredit),
      [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.TOTAL_DEBTOR]: withSeparator(item?.totalDebit),
      [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BALANCE]: withSeparator(item?.totalCreditTotalDebit),
      [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BRANCH_RISK]: item?.branchRisk,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          const url = isJoint ? ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_TRANSACTION_HISTORY_BRANCH_DETAIL(String(item.branchCode)) : ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_BRANCH_DETAIL(String(item.branchCode))
          const branchObject: TransactionHistoryBranchObjectType = {
            [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BRANCH_CODE]: item?.branchCode,
            [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BRANCH_NAME]: item?.branchName,
            [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.REGION_CODE]: item?.areaCode,
            [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.REGION_NAME]: item?.areaName,
          }
          const params = {
            [QUERY_PARAMS.PERIOD_DATE_OBJECT]: JSON.stringify(periodDateObject),
            [QUERY_PARAMS.BRANCH_OBJECT]: JSON.stringify(branchObject),
            [QUERY_PARAMS.CUSTOMER_ID]: customerId,
          }
          navigate(getUrlWithParams(url, params))
        }, 'ریز تراکنش‌ها')
      ],
    }))
  }, [data])

  return {
    monthName, year, tableData, isFetching, error: undefined, isMaxCount
  }
}

export default usePanelTransactionHistoryByPeriodDetailRender;
