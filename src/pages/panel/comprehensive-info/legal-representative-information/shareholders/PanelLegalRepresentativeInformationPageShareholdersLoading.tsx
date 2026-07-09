import {PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../components/others/Table/Table.tsx";

function PanelLegalRepresentativeInformationPageShareholdersLoading() {
  return (
    <Table
      columns={PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelLegalRepresentativeInformationPageShareholdersLoading;
