import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS
} from "./index.contances.ts";
import {
  PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS
} from "./index.legal.constances.ts";
import getActivePersonData from "../../utils/getActivePersonData.ts";
import usePanelEconomicInformationPageEconomicActivityLegal
  from "./hooks/usePanelEconomicInformationPageEconomicActivityLegal.ts";
import usePanelEconomicInformationPageEconomicActivityNatural
  from "./hooks/usePanelEconomicInformationPageEconomicActivityNatural.ts";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";


function PanelEconomicInformationPageEconomicActivity() {

  const {isLegalBool} = getActivePersonData()

  const {
    legalTableData, legalLoading, legalError
  } = usePanelEconomicInformationPageEconomicActivityLegal()

  const {
    naturalTableData, naturalLoading, naturalError
  } = usePanelEconomicInformationPageEconomicActivityNatural()

  return (
    <RenderLogic
      error={legalError || naturalError}
      isLoading={legalLoading || naturalLoading}
    >
      <Table
        columns={
          isLegalBool ? PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS : PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS
        }
        data={
          isLegalBool ? legalTableData : naturalTableData
        }
      />
    </RenderLogic>
  );
}

export default PanelEconomicInformationPageEconomicActivity;