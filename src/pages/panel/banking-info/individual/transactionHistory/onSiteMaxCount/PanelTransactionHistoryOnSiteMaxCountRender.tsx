import {
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_COLUMNS,
} from "./index.constances.tsx";
import Table from "../../../../../../components/others/Table/Table.tsx";
import usePanelTransactionHistoryOnSiteMaxCountRender from "./hooks/usePanelTransactionHistoryOnSiteMaxCountRender.ts";


export type PanelTransactionHistoryOnSiteMaxCountRenderProps = {
  isJoint?: boolean;
}

function PanelTransactionHistoryOnSiteMaxCountRender(
  {isJoint}: PanelTransactionHistoryOnSiteMaxCountRenderProps
) {

  const {
    tableData
  } = usePanelTransactionHistoryOnSiteMaxCountRender({
    isJoint
  })

  return (
    <Table
      columns={PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_COLUMNS}
      data={tableData}
    />
  );
}

export default PanelTransactionHistoryOnSiteMaxCountRender;
