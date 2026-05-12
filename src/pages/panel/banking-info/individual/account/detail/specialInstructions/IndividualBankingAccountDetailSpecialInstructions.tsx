import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS,
  INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_FAKE_DATA
} from "./index.constances.ts";

function IndividualBankingAccountDetailSpecialInstructions() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS}
      data={INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_FAKE_DATA}
    />
  );
}

export default IndividualBankingAccountDetailSpecialInstructions;