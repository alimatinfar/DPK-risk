import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS,
  INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_FAKE_DATA
} from "./index.constances.ts";


function IndividualBankingAccountDetailReturnedCheques() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS}
      data={INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_FAKE_DATA}
      // loading
    />
  );
}

export default IndividualBankingAccountDetailReturnedCheques;