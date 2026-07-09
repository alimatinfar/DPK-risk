import {INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function IndividualBankingAccountDetailSaptaMobileNumbersLoading() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default IndividualBankingAccountDetailSaptaMobileNumbersLoading;
