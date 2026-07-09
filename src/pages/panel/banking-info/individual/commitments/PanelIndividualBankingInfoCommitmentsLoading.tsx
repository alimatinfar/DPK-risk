import {PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS} from "./index.constances.tsx";
import Table from "../../../../../components/others/Table/Table.tsx";

function PanelIndividualBankingInfoCommitmentsLoading() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelIndividualBankingInfoCommitmentsLoading;
