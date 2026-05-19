import Table from "../../../../../components/others/Table/Table.tsx";
import {PANEL_JOINT_FACILITIES_TABLE_COLUMNS, PANEL_JOINT_FACILITIES_TABLE_FAKE_DATA} from "./index.constances.tsx";

function PanelJointBankingInfoFacilities() {
  return (
    <Table
      columns={PANEL_JOINT_FACILITIES_TABLE_COLUMNS}
      data={PANEL_JOINT_FACILITIES_TABLE_FAKE_DATA}
    />
  );
}

export default PanelJointBankingInfoFacilities;