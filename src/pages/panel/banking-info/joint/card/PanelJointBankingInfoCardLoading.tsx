import Table from "../../../../../components/others/Table/Table.tsx";
import {PANEL_JOINT_CARD_INFO_TABLE_COLUMNS} from "./index.constances.tsx";

function PanelJointBankingInfoCardLoading() {
  return (
    <Table columns={PANEL_JOINT_CARD_INFO_TABLE_COLUMNS} data={[]} loading />
  );
}

export default PanelJointBankingInfoCardLoading;
