import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS,
  INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_FAKE_DATA
} from "./index.constances.ts";


function IndividualBankingAccountDetailSaptaMobileNumbers() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS}
      data={INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_FAKE_DATA}
    />
  );
}

export default IndividualBankingAccountDetailSaptaMobileNumbers;