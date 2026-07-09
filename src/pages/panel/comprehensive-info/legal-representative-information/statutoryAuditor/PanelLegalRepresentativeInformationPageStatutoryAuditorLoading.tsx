import {PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../components/others/Table/Table.tsx";

function PanelLegalRepresentativeInformationPageStatutoryAuditorLoading() {
  return (
    <Table
      columns={PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelLegalRepresentativeInformationPageStatutoryAuditorLoading;
