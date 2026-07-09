import {
  PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS,
} from "./index.constances.ts";
import usePanelLegalRepresentativeInformationPageShareholders
  from "./hooks/usePanelLegalRepresentativeInformationPageShareholders.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelLegalRepresentativeInformationPageShareholders() {

  const {
    error, isFetching, tableData
  } = usePanelLegalRepresentativeInformationPageShareholders()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelLegalRepresentativeInformationPageShareholders;
