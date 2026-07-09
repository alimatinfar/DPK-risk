import {PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS} from "./index.constances.tsx";
import Table from "../../../../../components/others/Table/Table.tsx";

function PanelIndividualBankingInfoAccountLoading() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelIndividualBankingInfoAccountLoading;
