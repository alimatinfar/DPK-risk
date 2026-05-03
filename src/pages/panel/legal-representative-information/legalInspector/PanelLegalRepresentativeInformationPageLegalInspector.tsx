import {
  PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS,
  PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_FAKE_DATA
} from "../statutoryAuditor/index.constances.ts";
import Table from "../../../../components/others/Table/Table.tsx";


function PanelLegalRepresentativeInformationPageLegalInspector() {
  return (
    <Table
      columns={PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS}
      data={PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_FAKE_DATA}
    />
  );
}

export default PanelLegalRepresentativeInformationPageLegalInspector;