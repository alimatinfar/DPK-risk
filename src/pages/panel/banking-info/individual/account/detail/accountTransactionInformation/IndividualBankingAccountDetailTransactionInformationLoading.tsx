import {INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function IndividualBankingAccountDetailTransactionInformationLoading() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default IndividualBankingAccountDetailTransactionInformationLoading;
