import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS,
  PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_FAKE_DATA
} from "./index.contances.ts";
import {
  PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS,
  PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_FAKE_DATA
} from "./index.legal.constances.ts";
import getActivePersonData from "../../utils/getActivePersonData.ts";


function PanelEconomicInformationPageEconomicActivity() {

  const {isLegal, activePersonData} = getActivePersonData()

  return (
    <Table
      columns={
      isLegal(activePersonData) ? PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS : PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS
      }
      data={
      isLegal(activePersonData) ? PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_FAKE_DATA : PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_FAKE_DATA
      }
    />
  );
}

export default PanelEconomicInformationPageEconomicActivity;