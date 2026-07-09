import {PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../components/others/Table/Table.tsx";

function PanelLegalRepresentativeInformationPageLegalRepresentativeLoading() {
  return (
    <Table
      columns={PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelLegalRepresentativeInformationPageLegalRepresentativeLoading;
