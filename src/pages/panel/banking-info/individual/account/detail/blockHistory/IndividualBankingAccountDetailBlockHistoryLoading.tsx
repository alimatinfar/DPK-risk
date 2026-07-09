import {INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function IndividualBankingAccountDetailBlockHistoryLoading() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default IndividualBankingAccountDetailBlockHistoryLoading;
