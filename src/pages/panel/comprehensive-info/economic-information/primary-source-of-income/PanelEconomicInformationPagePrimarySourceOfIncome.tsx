import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS,
} from "./index.constances.ts";

import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelEconomicInformationPagePrimarySourceOfIncome
  from "./hooks/usePanelEconomicInformationPagePrimarySourceOfIncome.ts";


function PanelEconomicInformationPagePrimarySourceOfIncome() {

  const {
    isFetching, error, tableData
  } = usePanelEconomicInformationPagePrimarySourceOfIncome()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelEconomicInformationPagePrimarySourceOfIncome;
