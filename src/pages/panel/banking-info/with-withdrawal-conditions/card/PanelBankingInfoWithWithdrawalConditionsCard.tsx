import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_CARD_INFO_TABLE_FAKE_DATA
} from "../../individual/card/index.constances.tsx";

function PanelBankingInfoWithWithdrawalConditionsCard() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS}
      data={PANEL_INDIVIDUAL_CARD_INFO_TABLE_FAKE_DATA}
    />
  );
}

export default PanelBankingInfoWithWithdrawalConditionsCard;