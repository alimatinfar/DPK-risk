import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS, PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS,
} from "./index.constances.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelLegalRepresentativeInformationPageBoardMembers
  from "./hooks/usePanelLegalRepresentativeInformationPageBoardMembers.ts";


function PanelLegalRepresentativeInformationPageBoardMembers() {

  const {
    isFetching, error, tableData
  } = usePanelLegalRepresentativeInformationPageBoardMembers()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelLegalRepresentativeInformationPageBoardMembers;
