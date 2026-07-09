import usePanelEconomicInformationPageSecondarySourceOfIncome
  from "./hooks/usePanelEconomicInformationPageSecondarySourceOfIncome.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";
import {PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS} from "./index.constances.ts";


function PanelEconomicInformationPageSecondarySourceOfIncome() {

  const {
    isFetching, error, tableData
  } = usePanelEconomicInformationPageSecondarySourceOfIncome()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS,
      }}
    />
  );
}

export default PanelEconomicInformationPageSecondarySourceOfIncome;
