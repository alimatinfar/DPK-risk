import {
  PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS_KEYS,
  PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_FAKE_DATA
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
import type {PanelTransactionHistoryPeriodObjectType} from "../../../onSiteMaxCount/index.types.ts";
import getUrlWithParams from "../../../../../../../../utils/getUrlWithParams.ts";
import type {
  PanelTransactionHistoryEServiceDetailRenderProps
} from "../PanelTransactionHistoryEServiceDetailRender.tsx";

function usePanelTransactionHistoryEServiceDetailRender(
  {isJoint}: Pick<PanelTransactionHistoryEServiceDetailRenderProps, 'isJoint'>
) {

  const eServiceLabel = useGetQueryParam(QUERY_PARAMS.NAME)

  const navigate = useNavigate()

  const {eServiceId} = useParams()

  const tableData = useMemo(function () {

    return PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_FAKE_DATA?.map((item, index) => ({
      ...item,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          const url = isJoint ? ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL(String(eServiceId), String(item.id)) : ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL(String(eServiceId), String(item.id))
          const periodDateObject: Partial<PanelTransactionHistoryPeriodObjectType> = {
            monthName: item[PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS_KEYS.MONTH],
            isCurrentMonth: index === 0
          }
          const params = {
            [QUERY_PARAMS.PERIOD_DATE_OBJECT]: JSON.stringify(periodDateObject),
            [QUERY_PARAMS.NAME]: eServiceLabel,
          }
          navigate(getUrlWithParams(url, params))
        }, 'ریز تراکنش‌ها')
      ],
    }))
  }, [])

  return {
    eServiceLabel, tableData
  }
}

export default usePanelTransactionHistoryEServiceDetailRender;
