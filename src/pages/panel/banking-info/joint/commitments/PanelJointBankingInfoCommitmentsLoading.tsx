import Table from "../../../../../components/others/Table/Table.tsx";
import {PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS} from "./index.constances.tsx";

function PanelJointBankingInfoCommitmentsLoading() {
  return (
    <Table columns={PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS} data={[]} loading />
  );
}

export default PanelJointBankingInfoCommitmentsLoading;
