import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS,
  PANEL_LEGAL_REPRESENTATIVE_TABLE_FAKE_DATA
} from "./index.constances.ts";


function PanelLegalRepresentativeInformationPageLegalRepresentative() {
  return (
    <Table
      columns={PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS}
      data={PANEL_LEGAL_REPRESENTATIVE_TABLE_FAKE_DATA}
    />
  );
}

export default PanelLegalRepresentativeInformationPageLegalRepresentative;