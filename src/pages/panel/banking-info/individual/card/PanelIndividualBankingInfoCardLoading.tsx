import {PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS} from "./index.constances.tsx";
import Table from "../../../../../components/others/Table/Table.tsx";

function PanelIndividualBankingInfoCardLoading() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelIndividualBankingInfoCardLoading;
