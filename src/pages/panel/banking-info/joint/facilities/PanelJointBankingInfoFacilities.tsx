import {
  PANEL_JOINT_FACILITIES_TABLE_COLUMNS
} from "./index.constances.tsx";
import usePanelJointBankingInfoFacilities from "./hooks/usePanelJointBankingInfoFacilities.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelJointBankingInfoFacilities() {

  const {
    isFetching, error, tableData
  } = usePanelJointBankingInfoFacilities()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_JOINT_FACILITIES_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelJointBankingInfoFacilities;
