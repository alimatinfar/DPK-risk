import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS,
  PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_FAKE_DATA
} from "./index.constances.ts";


function PanelLegalRepresentativeInformationPageShareholders() {
  return (
    <Table
      columns={PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS}
      data={PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_FAKE_DATA}
    />
  );
}

export default PanelLegalRepresentativeInformationPageShareholders;