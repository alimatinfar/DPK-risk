import PanelIndividualBankingInfoTransactionHistoryRender
  from "./PanelIndividualBankingInfoTransactionHistoryRender.tsx";
import {
  PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT,
} from "./index.constances.tsx";


function PanelIndividualBankingInfoTransactionHistory() {
  return (
    <PanelIndividualBankingInfoTransactionHistoryRender
      renderObject={PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT}
    />
  )
}

export default PanelIndividualBankingInfoTransactionHistory;
