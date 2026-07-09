import {PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS} from "./index.constances.tsx";
import Table from "../../../../../components/others/Table/Table.tsx";

function PanelIndividualBankingInfoEServicePortalLoading() {
  return (
    <Table
      columns={PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelIndividualBankingInfoEServicePortalLoading;
