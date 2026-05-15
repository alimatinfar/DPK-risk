import {
  INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS,
  INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_FAKE_DATA
} from "../../../../individual/account/detail/accountTransactionInformation/index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function JointBankingAccountDetailTransactionInformation() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS}
      data={INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_FAKE_DATA}
    />
  );
}

export default JointBankingAccountDetailTransactionInformation;