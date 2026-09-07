import {
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS,
} from "./index.constances.tsx";
import usePanelTransactionHistoryOnSiteRender from "./hooks/usePanelTransactionHistoryOnSiteRender.tsx";
import TableRenderLogic from "../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";
import type {
  EServicePortalSharedCustomerNumberFieldProps
} from "../../eServicePortal/EServicePortalSharedCustomerNumberField.tsx";


export type PanelTransactionHistoryOnSiteMaxCountRenderProps = {
  isJoint?: boolean;
} & Partial<Pick<EServicePortalSharedCustomerNumberFieldProps, 'selectedCustomerNumber'>>

function PanelTransactionHistoryOnSite(
  {isJoint, selectedCustomerNumber}: PanelTransactionHistoryOnSiteMaxCountRenderProps
) {

  const {
    tableData, isFetching, error
  } = usePanelTransactionHistoryOnSiteRender({
    isJoint, selectedCustomerNumber
  })

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching,
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelTransactionHistoryOnSite;
