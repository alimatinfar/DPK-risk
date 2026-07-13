import {
  PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS
} from "../../individual/card/index.constances.tsx";
import usePanelBankingInfoWithWithdrawalConditionsCard
  from "./hooks/usePanelBankingInfoWithWithdrawalConditionsCard.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";

function PanelBankingInfoWithWithdrawalConditionsCard() {

  const {
    isFetching, error, tableData
  } = usePanelBankingInfoWithWithdrawalConditionsCard()

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

export default PanelBankingInfoWithWithdrawalConditionsCard;
