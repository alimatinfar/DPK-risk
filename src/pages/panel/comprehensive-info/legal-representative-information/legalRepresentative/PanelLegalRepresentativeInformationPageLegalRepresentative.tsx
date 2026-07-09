import {
  PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS,
} from "./index.constances.ts";
import usePanelLegalRepresentativeInformationPageLegalRepresentative
  from "./hooks/usePanelLegalRepresentativeInformationPageLegalRepresentative.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelLegalRepresentativeInformationPageLegalRepresentative() {

  const {
    error, isFetching, tableData
  } = usePanelLegalRepresentativeInformationPageLegalRepresentative()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelLegalRepresentativeInformationPageLegalRepresentative;
