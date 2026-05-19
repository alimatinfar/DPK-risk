import {
  INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS,
  INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_FAKE_DATA
} from "../../../../individual/account/detail/saptaMobileNumbers/index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function JointBankingAccountDetailSaptaMobileNumbers() {
  return (
    <Table
      columns={INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS}
      data={INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_FAKE_DATA}
    />
  );
}

export default JointBankingAccountDetailSaptaMobileNumbers;