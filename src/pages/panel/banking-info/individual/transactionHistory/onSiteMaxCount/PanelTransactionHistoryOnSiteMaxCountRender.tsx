import {
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_COLUMNS,
} from "./index.constances.tsx";
import usePanelTransactionHistoryOnSiteMaxCountRender from "./hooks/usePanelTransactionHistoryOnSiteMaxCountRender.ts";
import TableRenderLogic from "../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


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
    <TableRenderLogic
      renderLogicProps={{
        error: null,
        isLoading: false
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_MAX_COUNT_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelTransactionHistoryOnSiteMaxCountRender;
