import Table from "../../../../../components/others/Table/Table.tsx";
import {PANEL_JOINT_FACILITIES_TABLE_COLUMNS} from "./index.constances.tsx";

function PanelJointBankingInfoFacilitiesLoading() {
  return (
    <Table columns={PANEL_JOINT_FACILITIES_TABLE_COLUMNS} data={[]} loading />
  );
}

export default PanelJointBankingInfoFacilitiesLoading;
