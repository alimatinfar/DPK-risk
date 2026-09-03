import {PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS} from "./index.constances.tsx";
import Table from "../../../../../../components/others/Table/Table.tsx";

function PanelTransactionHistoryOnSiteLoading() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelTransactionHistoryOnSiteLoading;
