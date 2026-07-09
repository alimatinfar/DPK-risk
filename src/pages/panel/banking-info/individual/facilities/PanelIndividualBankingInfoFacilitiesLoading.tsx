import {PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS} from "./index.constances.tsx";
import Table from "../../../../../components/others/Table/Table.tsx";

function PanelIndividualBankingInfoFacilitiesLoading() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelIndividualBankingInfoFacilitiesLoading;
