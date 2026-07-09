import {PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function IndividualBankingAccountDetailAccountSignatoriesLoading() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default IndividualBankingAccountDetailAccountSignatoriesLoading;
