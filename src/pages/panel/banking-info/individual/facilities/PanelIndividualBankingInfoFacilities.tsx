import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS,
} from "./index.constances.tsx";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelIndividualBankingInfoFacilities from "./hooks/usePanelIndividualBankingInfoFacilities.ts";


function PanelIndividualBankingInfoFacilities() {

  const {
    isFetching, error, tableData
  } = usePanelIndividualBankingInfoFacilities()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
    <Table
      columns={PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS}
      data={tableData}
    />
    </RenderLogic>
  );
}

export default PanelIndividualBankingInfoFacilities;
