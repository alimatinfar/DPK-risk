import usePanelLegalRepresentativeInformationPageBoardMembers
  from "./hooks/usePanelLegalRepresentativeInformationPageBoardMembers.ts";
import {PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS} from "./index.constances.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelLegalRepresentativeInformationPageBoardMembers() {

  const {
    isFetching, error, tableData
  } = usePanelLegalRepresentativeInformationPageBoardMembers()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelLegalRepresentativeInformationPageBoardMembers;
