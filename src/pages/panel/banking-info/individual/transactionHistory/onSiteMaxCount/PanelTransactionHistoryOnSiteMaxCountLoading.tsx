import {PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_COLUMNS} from "./index.constances.tsx";
import Table from "../../../../../../components/others/Table/Table.tsx";

function PanelTransactionHistoryOnSiteMaxCountLoading() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelTransactionHistoryOnSiteMaxCountLoading;
