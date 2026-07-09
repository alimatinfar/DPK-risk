import {INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function IndividualBankingAccountDetailSpecialInstructionsLoading() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default IndividualBankingAccountDetailSpecialInstructionsLoading;
