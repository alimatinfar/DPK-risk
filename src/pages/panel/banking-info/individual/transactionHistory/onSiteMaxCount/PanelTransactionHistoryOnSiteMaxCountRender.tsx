import {
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_FAKE_DATA
} from "./index.constances.tsx";
import TABLE_ACCESSORS from "../../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import {useMemo} from "react";
import Table from "../../../../../../components/others/Table/Table.tsx";
import {useNavigate} from "react-router";
import ROUTER_LINKS from "../../../../../../constances/routerLinks.ts";


function PanelTransactionHistoryOnSiteMaxCountRender() {

  const navigate = useNavigate()

  const tableData = useMemo(function () {

    return PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_FAKE_DATA?.map((item, index) => ({
      ...item,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          navigate(ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_PERIOD_DETAIL(String(item.rowNumber)))
        }, 'مراجعات به تفکیک شعب')
      ],
    }))
  }, [])

  return (
    <Table
      columns={PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_COLUMNS}
      data={tableData}
    />
  );
}

export default PanelTransactionHistoryOnSiteMaxCountRender;
