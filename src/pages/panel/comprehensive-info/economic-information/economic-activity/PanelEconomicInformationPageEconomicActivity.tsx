import Table from "../../../../../components/others/Table/Table.tsx";
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
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import PanelEconomicInformationPageEconomicActivityTable from "./PanelEconomicInformationPageEconomicActivityTable.tsx";
import PanelEconomicInformationPageEconomicActivityLoading
  from "./PanelEconomicInformationPageEconomicActivityLoading.tsx";


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
    <RenderLogic
      error={legalError || naturalError}
      isEmpty={tableData?.length === 0}
      isLoading={legalLoading || naturalLoading}
      loadingElement={<PanelEconomicInformationPageEconomicActivityLoading />}
    >
      <PanelEconomicInformationPageEconomicActivityTable data={tableData} />
    </RenderLogic>
  );
}

export default PanelEconomicInformationPageEconomicActivity;
