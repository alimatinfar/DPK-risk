import PanelIndividualBankingInfoTransactionHistoryRender
  from "./PanelIndividualBankingInfoTransactionHistoryRender.tsx";
import {
  PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT,
} from "./index.constances.tsx";
import useSelectedCustomerNumber from "../eServicePortal/hooks/useSelectedCustomerNumber.ts";


function PanelIndividualBankingInfoTransactionHistory() {

  const {
    selectedCustomerNumber, setSelectedCustomerNumber
  } = useSelectedCustomerNumber()

  return (
    <PanelIndividualBankingInfoTransactionHistoryRender
      renderObject={PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT}
      selectedCustomerNumber={selectedCustomerNumber} setSelectedCustomerNumber={setSelectedCustomerNumber}
    />
  )
}

export default PanelIndividualBankingInfoTransactionHistory;
