import {
  INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS,
  INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_FAKE_DATA
} from "../../../../individual/account/detail/returnedCheques/index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function JointBankingAccountDetailReturnedCheques() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS}
      data={INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_FAKE_DATA}
    />
  );
}

export default JointBankingAccountDetailReturnedCheques;