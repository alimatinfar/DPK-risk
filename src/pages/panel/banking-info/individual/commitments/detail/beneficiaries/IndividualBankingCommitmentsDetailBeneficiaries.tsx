import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_COMMITMENT_BENEFICIARIES_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_COMMITMENT_BENEFICIARIES_TABLE_FAKE_DATA
} from "./index.constances.ts";

function IndividualBankingCommitmentsDetailBeneficiaries() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_COMMITMENT_BENEFICIARIES_TABLE_COLUMNS}
      data={PANEL_INDIVIDUAL_COMMITMENT_BENEFICIARIES_TABLE_FAKE_DATA}
    />
  )
}

export default IndividualBankingCommitmentsDetailBeneficiaries;