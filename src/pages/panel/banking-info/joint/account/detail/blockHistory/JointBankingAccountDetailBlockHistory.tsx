import {
  INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS,
  INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_FAKE_DATA
} from "../../../../individual/account/detail/blockHistory/index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function JointBankingAccountDetailBlockHistory() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS}
      data={INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_FAKE_DATA}
    />
  );
}

export default JointBankingAccountDetailBlockHistory;