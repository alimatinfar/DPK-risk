import {PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS} from "./index.constances.tsx";
import Table from "../../../../../../components/others/Table/Table.tsx";

function PanelIndividualBankingInfoCommitmentsDetailLoading() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelIndividualBankingInfoCommitmentsDetailLoading;
