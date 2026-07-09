import {PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS} from "./index.constances.ts";
import Table from "../../../../../components/others/Table/Table.tsx";

function PanelEconomicInformationPageSecondarySourceOfIncomeLoading() {
  return (
    <Table
      columns={PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelEconomicInformationPageSecondarySourceOfIncomeLoading;
