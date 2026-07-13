import {
  PANEL_JOINT_CARD_INFO_TABLE_COLUMNS
} from "./index.constances.tsx";
import usePanelJointBankingInfoCard from "./hooks/usePanelJointBankingInfoCard.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelJointBankingInfoCard() {

  const {
    isFetching, error, tableData
  } = usePanelJointBankingInfoCard()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_JOINT_CARD_INFO_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelJointBankingInfoCard;
