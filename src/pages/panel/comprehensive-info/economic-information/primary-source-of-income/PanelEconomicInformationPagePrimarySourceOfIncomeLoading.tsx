import Table from "../../../../../components/others/Table/Table.tsx";
import {PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS} from "./index.constances.ts";

function PanelEconomicInformationPagePrimarySourceOfIncomeLoading() {
  return (
    <Table
      columns={PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS}
      data={[]} loading
    />
  );
}

export default PanelEconomicInformationPagePrimarySourceOfIncomeLoading;
