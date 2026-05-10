import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_BANK_INFO_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_BANK_INFO_TABLE_FAKE_DATA
} from "./index.constances.tsx";


function PanelIndividualBankingInfoAccount() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_BANK_INFO_TABLE_COLUMNS}
      data={PANEL_INDIVIDUAL_BANK_INFO_TABLE_FAKE_DATA}
    />
  );
}

export default PanelIndividualBankingInfoAccount;