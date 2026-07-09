import usePanelEconomicInformationPagePrimarySourceOfIncome
  from "./hooks/usePanelEconomicInformationPagePrimarySourceOfIncome.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";
import {PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS} from "./index.constances.ts";


function PanelEconomicInformationPagePrimarySourceOfIncome() {

  const {
    isFetching, error, tableData
  } = usePanelEconomicInformationPagePrimarySourceOfIncome()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelEconomicInformationPagePrimarySourceOfIncome;
