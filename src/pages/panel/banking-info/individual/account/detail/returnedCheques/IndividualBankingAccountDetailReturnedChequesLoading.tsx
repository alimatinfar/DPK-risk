import {INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function IndividualBankingAccountDetailReturnedChequesLoading() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default IndividualBankingAccountDetailReturnedChequesLoading;
