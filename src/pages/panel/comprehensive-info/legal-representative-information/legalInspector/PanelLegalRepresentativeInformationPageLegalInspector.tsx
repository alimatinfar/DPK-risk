import {
  PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS,
} from "../statutoryAuditor/index.constances.ts";
import usePanelLegalRepresentativeInformationPageLegalInspector
  from "./hooks/usePanelLegalRepresentativeInformationPageLegalInspector.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelLegalRepresentativeInformationPageLegalInspector() {

  const {
    error, isFetching, tableData
  } = usePanelLegalRepresentativeInformationPageLegalInspector()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelLegalRepresentativeInformationPageLegalInspector;
