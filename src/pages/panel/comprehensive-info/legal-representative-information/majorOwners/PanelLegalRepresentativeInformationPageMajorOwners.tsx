import {
  PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS,
} from "./index.constances.ts";
import usePanelLegalRepresentativeInformationPageMajorOwners
  from "./hooks/usePanelLegalRepresentativeInformationPageMajorOwners.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelLegalRepresentativeInformationPageMajorOwners() {

  const {
    error, isFetching, tableData
  } = usePanelLegalRepresentativeInformationPageMajorOwners()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelLegalRepresentativeInformationPageMajorOwners;
