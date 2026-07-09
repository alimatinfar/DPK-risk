import {INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function IndividualBankingAccountDetailIssuedChequesLoading() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default IndividualBankingAccountDetailIssuedChequesLoading;
