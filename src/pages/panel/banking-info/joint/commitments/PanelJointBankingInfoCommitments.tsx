import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS
} from "./index.constances.tsx";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelJointBankingInfoCommitments from "./hooks/usePanelJointBankingInfoCommitments.ts";


function PanelJointBankingInfoCommitments() {

  const {
    isFetching, error, tableData
  } = usePanelJointBankingInfoCommitments()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelJointBankingInfoCommitments;
