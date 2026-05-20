import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_FACILITIES_TABLE_FAKE_DATA
} from "./index.constances.tsx";


function PanelIndividualBankingInfoFacilities() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS}
      data={PANEL_INDIVIDUAL_FACILITIES_TABLE_FAKE_DATA}
    />
  );
}

export default PanelIndividualBankingInfoFacilities;