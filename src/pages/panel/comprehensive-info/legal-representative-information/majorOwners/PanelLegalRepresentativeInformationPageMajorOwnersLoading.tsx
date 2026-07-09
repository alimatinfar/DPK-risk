import {PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../components/others/Table/Table.tsx";

function PanelLegalRepresentativeInformationPageMajorOwnersLoading() {
  return (
    <Table
      columns={PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelLegalRepresentativeInformationPageMajorOwnersLoading;
