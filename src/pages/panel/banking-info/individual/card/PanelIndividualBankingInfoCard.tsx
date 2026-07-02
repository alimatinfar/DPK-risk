import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS
} from "./index.constances.tsx";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelIndividualBankingInfoCard from "./hooks/usePanelIndividualBankingInfoCard.ts";


function PanelIndividualBankingInfoCard() {

  const {
    isFetching, error, tableData
  } = usePanelIndividualBankingInfoCard()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelIndividualBankingInfoCard;
