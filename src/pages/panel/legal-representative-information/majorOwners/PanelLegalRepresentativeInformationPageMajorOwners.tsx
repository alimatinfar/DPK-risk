import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS,
  PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_FAKE_DATA
} from "./index.constances.ts";


function PanelLegalRepresentativeInformationPageMajorOwners() {
  return (
    <Table
      columns={PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS}
      data={PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_FAKE_DATA}
    />
  );
}

export default PanelLegalRepresentativeInformationPageMajorOwners;