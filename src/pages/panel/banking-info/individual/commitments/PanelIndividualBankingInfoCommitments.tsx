import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS
} from "./index.constances.tsx";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelIndividualBankingInfoCommitments from "./hooks/usePanelIndividualBankingInfoCommitments.ts";


function PanelIndividualBankingInfoCommitments() {

  const {
    isFetching, error, tableData
  } = usePanelIndividualBankingInfoCommitments()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelIndividualBankingInfoCommitments;
