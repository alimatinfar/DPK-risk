import Table from "../../../../../../../components/others/Table/Table.tsx";
import {INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS} from "./index.constances.ts";


function IndividualBankingAccountDetailIssuedCheques() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS}
      data={[]}
    />
  );
}

export default IndividualBankingAccountDetailIssuedCheques;
