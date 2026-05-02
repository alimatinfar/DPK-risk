import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS,
  PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_FAKE_DATA
} from "./index.contances.ts";
import getActivePersonDataType from "../../utils/getActivePersonDataType.ts";
import {
  PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS,
  PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_FAKE_DATA
} from "./index.legal.constances.ts";


function PanelEconomicInformationPageEconomicActivity() {

  const {isLegal} = getActivePersonDataType()

  return (
    <Table
      columns={
      isLegal ? PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS : PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS
      }
      data={
      isLegal ? PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_FAKE_DATA : PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_FAKE_DATA
      }
    />
  );
}

export default PanelEconomicInformationPageEconomicActivity;