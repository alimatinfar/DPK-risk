import {
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS,
} from "./index.constances.tsx";
import usePanelTransactionHistoryOnSiteRender from "./hooks/usePanelTransactionHistoryOnSiteRender.ts";
import TableRenderLogic from "../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


export type PanelTransactionHistoryOnSiteMaxCountRenderProps = {
  isJoint?: boolean;
}

function PanelTransactionHistoryOnSite(
  {isJoint}: PanelTransactionHistoryOnSiteMaxCountRenderProps
) {

  const {
    tableData, isFetching, error
  } = usePanelTransactionHistoryOnSiteRender({
    isJoint
  })

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelTransactionHistoryOnSite;
