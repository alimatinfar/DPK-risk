import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_JOINT_FACILITIES_TABLE_COLUMNS
} from "./index.constances.tsx";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelJointBankingInfoFacilities from "./hooks/usePanelJointBankingInfoFacilities.ts";


function PanelJointBankingInfoFacilities() {

  const {
    isFetching, error, tableData
  } = usePanelJointBankingInfoFacilities()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_JOINT_FACILITIES_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelJointBankingInfoFacilities;
