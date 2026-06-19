import useGetQueryParam from "../../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import PanelPageTitle from "../../../../../layout/PanelPageTitle.tsx";
import Card from "../../../../../../../components/others/Card/Card.tsx";
import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS, PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS_KEYS,
  PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_FAKE_DATA
} from "./index.constances.ts";
import {useNavigate, useParams} from "react-router";
import {useMemo} from "react";
import TABLE_ACCESSORS from "../../../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import ROUTER_LINKS from "../../../../../../../constances/routerLinks.ts";
import type {PanelTransactionHistoryPeriodObjectType} from "../../onSiteMaxCount/index.types.ts";
import getUrlWithParams from "../../../../../../../utils/getUrlWithParams.ts";


type Props = {
  isJoint?: boolean;
}

function PanelTransactionHistoryEServiceDetailRender(
  {isJoint}: Props
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

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`تراکنش های ${eServiceLabel}`} hasBack
      />

      <Card>
        <Table
          columns={PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS}
          data={tableData}
        />
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryEServiceDetailRender;
