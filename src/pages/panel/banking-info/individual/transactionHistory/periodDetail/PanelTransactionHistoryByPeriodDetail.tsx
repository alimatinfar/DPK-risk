import {useNavigate, useParams} from "react-router";
import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import Table from "../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS,
  PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS_KEYS,
  PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_FAKE_DATA
} from "./index.constances.tsx";
import {useMemo} from "react";
import TABLE_ACCESSORS from "../../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import ROUTER_LINKS from "../../../../../../constances/routerLinks.ts";
import Card from "../../../../../../components/others/Card/Card.tsx";
import useGetTransactionHistoryPeriodDateObject from "./hooks/useGetTransactionHistoryPeriodDateObject.ts";
import QUERY_PARAMS from "../../../../../../constances/queryParams.ts";
import getUrlWithParams from "../../../../../../utils/getUrlWithParams.ts";
import type {TransactionHistoryBranchObjectType} from "./index.types.ts";


function PanelTransactionHistoryByPeriodDetail() {

  const {periodId} = useParams()

  const periodDateObject = useGetTransactionHistoryPeriodDateObject()
  const {isCurrentMonth, monthName} = periodDateObject

  const navigate = useNavigate()

  const tableData = useMemo(function () {

    return PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_FAKE_DATA?.map((item, index) => ({
      ...item,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          const url = ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_BRANCH_DETAIL(String(periodId), String(item.id))
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

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`مجموع تراکنش‌های ${`${monthName}${isCurrentMonth ? ' (ماه جاری)' : ''}`} به تفکیک شعب`} hasBack
      />

      <Card>
        <Table
          columns={PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS}
          data={tableData}
        />
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryByPeriodDetail;
