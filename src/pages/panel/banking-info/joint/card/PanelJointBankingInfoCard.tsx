import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_JOINT_CARD_INFO_TABLE_COLUMNS
} from "./index.constances.tsx";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelJointBankingInfoCard from "./hooks/usePanelJointBankingInfoCard.ts";


function PanelJointBankingInfoCard() {

  const {
    isFetching, error, tableData
  } = usePanelJointBankingInfoCard()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_JOINT_CARD_INFO_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelJointBankingInfoCard;
