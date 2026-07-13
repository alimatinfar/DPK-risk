import {
  PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS
} from "./index.constances.tsx";
import usePanelJointBankingInfoCommitments from "./hooks/usePanelJointBankingInfoCommitments.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelJointBankingInfoCommitments() {

  const {
    isFetching, error, tableData
  } = usePanelJointBankingInfoCommitments()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelJointBankingInfoCommitments;
