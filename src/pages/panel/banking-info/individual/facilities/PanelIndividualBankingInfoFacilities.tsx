import {
  PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS,
} from "./index.constances.tsx";
import usePanelIndividualBankingInfoFacilities from "./hooks/usePanelIndividualBankingInfoFacilities.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelIndividualBankingInfoFacilities() {

  const {
    isFetching, error, tableData
  } = usePanelIndividualBankingInfoFacilities()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelIndividualBankingInfoFacilities;
