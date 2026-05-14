import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_FAKE_DATA
} from "./index.constances.tsx";


function PanelIndividualBankingInfoEServicePortal() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS}
      data={PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_FAKE_DATA}
    />
  );
}

export default PanelIndividualBankingInfoEServicePortal;