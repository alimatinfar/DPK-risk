import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS,
  PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_FAKE_DATA
} from "./index.constances.ts";


function PanelEconomicInformationPagePrimarySourceOfIncome() {
  return (
    <Table
      columns={PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS}
      data={PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_FAKE_DATA}
    />
  );
}

export default PanelEconomicInformationPagePrimarySourceOfIncome;