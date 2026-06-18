import {useNavigate, useParams} from "react-router";
import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import Table from "../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS,
  PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_FAKE_DATA
} from "./index.constances.tsx";
import {useMemo} from "react";
import TABLE_ACCESSORS from "../../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import ROUTER_LINKS from "../../../../../../constances/routerLinks.ts";
import Card from "../../../../../../components/others/Card/Card.tsx";


function PanelTransactionHistoryByPeriodDetail() {

  const {periodId} = useParams()

  const navigate = useNavigate()

  const tableData = useMemo(function () {

    return PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_FAKE_DATA?.map((item, index) => ({
      ...item,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          navigate(ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_BRANCH_DETAIL(String(periodId), String(item.id)))
        }, 'ریز تراکنش‌ها')
      ],
    }))
  }, [])

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`بازه‌ی ${periodId}`} hasBack
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
