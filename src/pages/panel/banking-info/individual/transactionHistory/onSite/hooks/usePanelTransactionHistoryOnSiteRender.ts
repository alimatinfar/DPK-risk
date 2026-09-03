import {useNavigate} from "react-router";
import {useMemo} from "react";
import {
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS,
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_FAKE_DATA
} from "../index.constances.tsx";
import TABLE_ACCESSORS from "../../../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import ROUTER_LINKS from "../../../../../../../constances/routerLinks.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import getUrlWithParams from "../../../../../../../utils/getUrlWithParams.ts";
import type {PanelTransactionHistoryPeriodObjectType} from "../index.types.ts";
import type {
  PanelTransactionHistoryOnSiteMaxCountRenderProps
} from "../PanelTransactionHistoryOnSite.tsx";
function usePanelTransactionHistoryOnSiteRender(
  {isJoint}: Pick<PanelTransactionHistoryOnSiteMaxCountRenderProps, 'isJoint'>
) {

  const navigate = useNavigate()

  const tableData = useMemo(function () {

    return PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_FAKE_DATA?.map((item, index) => ({
      ...item,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          const url = isJoint ? ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_TRANSACTION_HISTORY_PERIOD_DETAIL(String(item.id)) : ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_PERIOD_DETAIL(String(item.id))
          const periodDateObject: PanelTransactionHistoryPeriodObjectType = {
            monthName: item[PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.MONTH],
            fromDate: item[PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.FROM_DATE],
            toDate: item[PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.TO_DATE],
            isCurrentMonth: index === 0
          }
          const params = {
            [QUERY_PARAMS.PERIOD_DATE_OBJECT]: JSON.stringify(periodDateObject)
          }
          navigate(getUrlWithParams(url, params))
        }, 'مراجعات به تفکیک شعب')
      ],
    }))
  }, [])

  return {
    tableData
  }
}

export default usePanelTransactionHistoryOnSiteRender;
