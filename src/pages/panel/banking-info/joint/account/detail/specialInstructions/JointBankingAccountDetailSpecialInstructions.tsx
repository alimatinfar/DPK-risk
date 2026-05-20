import {
  INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS,
  INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_FAKE_DATA
} from "../../../../individual/account/detail/specialInstructions/index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function JointBankingAccountDetailSpecialInstructions() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS}
      data={INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_FAKE_DATA}
    />
  );
}

export default JointBankingAccountDetailSpecialInstructions;