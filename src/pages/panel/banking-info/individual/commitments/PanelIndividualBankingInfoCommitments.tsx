import {
  PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS
} from "./index.constances.tsx";
import usePanelIndividualBankingInfoCommitments from "./hooks/usePanelIndividualBankingInfoCommitments.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelIndividualBankingInfoCommitments() {

  const {
    isFetching, error, tableData
  } = usePanelIndividualBankingInfoCommitments()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelIndividualBankingInfoCommitments;
