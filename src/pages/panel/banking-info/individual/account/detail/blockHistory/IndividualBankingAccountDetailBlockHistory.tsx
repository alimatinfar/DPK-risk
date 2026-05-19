import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS,
  INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_FAKE_DATA
} from "./index.constances.ts";


function IndividualBankingAccountDetailBlockHistory() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS}
      data={INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_FAKE_DATA}
    />
  );
}

export default IndividualBankingAccountDetailBlockHistory;