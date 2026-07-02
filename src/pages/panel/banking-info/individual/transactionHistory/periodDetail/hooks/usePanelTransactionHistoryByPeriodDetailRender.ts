import {useNavigate, useParams} from "react-router";
import useGetTransactionHistoryPeriodDateObject from "./useGetTransactionHistoryPeriodDateObject.ts";
import {useMemo} from "react";
import {
  PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS,
  PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_FAKE_DATA
} from "../index.constances.tsx";
import TABLE_ACCESSORS from "../../../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import ROUTER_LINKS from "../../../../../../../constances/routerLinks.ts";
import type {TransactionHistoryBranchObjectType} from "../index.types.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import getUrlWithParams from "../../../../../../../utils/getUrlWithParams.ts";
import type {
  PanelTransactionHistoryByPeriodDetailRenderProps
} from "../PanelTransactionHistoryByPeriodDetailRender.tsx";

function usePanelTransactionHistoryByPeriodDetailRender(
  {isJoint}: Pick<PanelTransactionHistoryByPeriodDetailRenderProps, 'isJoint'>
) {

  const {periodId} = useParams()

  const periodDateObject = useGetTransactionHistoryPeriodDateObject()
  const {isCurrentMonth, monthName} = periodDateObject

  const navigate = useNavigate()

  const tableData = useMemo(function () {

    return PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_FAKE_DATA?.map((item, index) => ({
      ...item,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          const url = isJoint ? ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_TRANSACTION_HISTORY_BRANCH_DETAIL(String(periodId), String(item.id)) : ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_BRANCH_DETAIL(String(periodId), String(item.id))
          const branchObject: TransactionHistoryBranchObjectType = {
            [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BRANCH_CODE]: item[PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BRANCH_CODE],
            [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BRANCH_NAME]: item[PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BRANCH_NAME],
            [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.REGION_CODE]: item[PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.REGION_CODE],
            [PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.REGION_NAME]: item[PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.REGION_NAME],
          }
          const params = {
            [QUERY_PARAMS.PERIOD_DATE_OBJECT]: JSON.stringify(periodDateObject),
            [QUERY_PARAMS.BRANCH_OBJECT]: JSON.stringify(branchObject),
          }
          navigate(getUrlWithParams(url, params))
        }, 'ریز تراکنش‌ها')
      ],
    }))
  }, [])

  return {
    monthName, isCurrentMonth, tableData
  }
}

export default usePanelTransactionHistoryByPeriodDetailRender;
