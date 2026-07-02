import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS,
} from "./index.constances.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelEconomicInformationPageSecondarySourceOfIncome
  from "./hooks/usePanelEconomicInformationPageSecondarySourceOfIncome.ts";


function PanelEconomicInformationPageSecondarySourceOfIncome() {

  const {
    isFetching, error, tableData
  } = usePanelEconomicInformationPageSecondarySourceOfIncome()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelEconomicInformationPageSecondarySourceOfIncome;
