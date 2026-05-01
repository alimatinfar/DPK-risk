import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS,
  PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_FAKE_DATA
} from "./index.contances.ts";


function PanelEconomicInformationPageEconomicActivity() {
  return (
    <Table
      columns={PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS}
      data={PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_FAKE_DATA}
    />
  );
}

export default PanelEconomicInformationPageEconomicActivity;