import {
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_FAKE_DATA
} from "./index.constances.tsx";
import TABLE_ACCESSORS from "../../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import {useMemo} from "react";
import Table from "../../../../../../components/others/Table/Table.tsx";


function PanelTransactionHistoryOnSiteMaxCountRender() {
  const tableData = useMemo(function () {

    return PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_FAKE_DATA?.map((item, index) => ({
      ...item,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          // const params = {
          //   [QUERY_PARAMS.ACCOUNT_NUMBER_STR]: item?.accountNumberStr
          // }
          // const url = getUrlWithParams(ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_ACCOUNT_DETAIL(item?.accountNumber), params)
          // navigate(url)
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
