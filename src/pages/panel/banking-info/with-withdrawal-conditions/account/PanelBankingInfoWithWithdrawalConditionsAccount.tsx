import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_COMMON_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_FAKE_DATA
} from "../../individual/account/index.constances.tsx";

function PanelBankingInfoWithWithdrawalConditionsAccount() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_COMMON_TABLE_COLUMNS}
      data={PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_FAKE_DATA}
    />
  );
}

export default PanelBankingInfoWithWithdrawalConditionsAccount;