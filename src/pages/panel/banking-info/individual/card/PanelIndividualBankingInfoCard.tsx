import {
  PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS
} from "./index.constances.tsx";
import usePanelIndividualBankingInfoCard from "./hooks/usePanelIndividualBankingInfoCard.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelIndividualBankingInfoCard() {

  const {
    isFetching, error, tableData
  } = usePanelIndividualBankingInfoCard()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelIndividualBankingInfoCard;
