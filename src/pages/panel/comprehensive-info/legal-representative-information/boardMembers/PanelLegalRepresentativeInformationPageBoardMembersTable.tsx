import {PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../components/others/Table/Table.tsx";
import type {TableProps} from "../../../../../components/others/Table/TableExports.ts";

function PanelLegalRepresentativeInformationPageBoardMembersTable(
  {data, loading}: Pick<TableProps<any>, 'data' | 'loading'>
) {
  return (
    <Table
      columns={PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS}
      data={data} loading={loading}
    />
  );
}

export default PanelLegalRepresentativeInformationPageBoardMembersTable;
