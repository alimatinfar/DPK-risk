import getActivePersonData from "../../../utils/getActivePersonData.ts";
import Table from "../../../../../components/others/Table/Table.tsx";
import {PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS} from "./index.legal.constances.ts";
import {PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS} from "./index.contances.ts";

function PanelEconomicInformationPageEconomicActivityLoading() {
  const {isLegalBool} = getActivePersonData()

  return (
    <Table
      columns={
        isLegalBool ? PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS : PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS
      }
      data={[]} loading
    />
  );
}

export default PanelEconomicInformationPageEconomicActivityLoading;
