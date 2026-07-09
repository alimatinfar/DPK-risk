import {
  PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS
} from "./index.contances.ts";
import {
  PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS
} from "./index.legal.constances.ts";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import usePanelEconomicInformationPageEconomicActivityLegal
  from "./hooks/usePanelEconomicInformationPageEconomicActivityLegal.ts";
import usePanelEconomicInformationPageEconomicActivityNatural
  from "./hooks/usePanelEconomicInformationPageEconomicActivityNatural.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelEconomicInformationPageEconomicActivity() {

  const {isLegalBool} = getActivePersonData()

  const {
    legalTableData, legalLoading, legalError
  } = usePanelEconomicInformationPageEconomicActivityLegal()

  const {
    naturalTableData, naturalLoading, naturalError
  } = usePanelEconomicInformationPageEconomicActivityNatural()

  const tableData = isLegalBool ? legalTableData : naturalTableData

  return (
    <TableRenderLogic
      renderLogicProps={{
        error: legalError || naturalError,
        isLoading: legalLoading || naturalLoading
      }}
      tableProps={{
        data: tableData,
        columns: isLegalBool ? PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS : PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelEconomicInformationPageEconomicActivity;
