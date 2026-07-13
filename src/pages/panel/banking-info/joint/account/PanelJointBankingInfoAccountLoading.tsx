import Table from "../../../../../components/others/Table/Table.tsx";
import {PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS} from "./index.constances.tsx";

function PanelJointBankingInfoAccountLoading() {
  return (
    <Table
      columns={PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS} data={[]} loading
    />
  );
}

export default PanelJointBankingInfoAccountLoading;
