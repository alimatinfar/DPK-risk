import PanelIndividualBankingInfoTransactionHistoryRender
  from "../../individual/transactionHistory/PanelIndividualBankingInfoTransactionHistoryRender.tsx";
import {PANEL_JOINT_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT} from "./index.constances.tsx";

function PanelJointBankingInfoTransactionHistory() {
  return (
    <PanelIndividualBankingInfoTransactionHistoryRender
      renderObject={PANEL_JOINT_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT}
    />
  );
}

export default PanelJointBankingInfoTransactionHistory;
