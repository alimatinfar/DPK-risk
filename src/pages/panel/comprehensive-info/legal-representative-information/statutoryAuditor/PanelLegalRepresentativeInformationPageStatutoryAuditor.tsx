import {
  PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS,
} from "./index.constances.ts";
import usePanelLegalRepresentativeInformationPageStatutoryAuditor
  from "./hooks/usePanelLegalRepresentativeInformationPageStatutoryAuditor.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelLegalRepresentativeInformationPageStatutoryAuditor() {

  const {
    error, isFetching, tableData
  } = usePanelLegalRepresentativeInformationPageStatutoryAuditor()

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

export default PanelLegalRepresentativeInformationPageStatutoryAuditor;
