import {
  PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_FAKE_DATA
} from "../../../../individual/commitments/detail/index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";

function JointBankingCommitmentsDetailBeneficiaries() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS}
      data={PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_FAKE_DATA}
    />
  );
}

export default JointBankingCommitmentsDetailBeneficiaries;