import PanelIndividualBankingInfoTransactionHistoryRender
  from "../../individual/transactionHistory/PanelIndividualBankingInfoTransactionHistoryRender.tsx";
import {PANEL_JOINT_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT} from "./index.constances.tsx";
import useSelectedCustomerNumber from "../../individual/eServicePortal/hooks/useSelectedCustomerNumber.ts";

function PanelJointBankingInfoTransactionHistory() {

  const {
    selectedCustomerNumber, setSelectedCustomerNumber
  } = useSelectedCustomerNumber()

  return (
    <PanelIndividualBankingInfoTransactionHistoryRender
      renderObject={PANEL_JOINT_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT({
        selectedCustomerNumber
      })}
      selectedCustomerNumber={selectedCustomerNumber} setSelectedCustomerNumber={setSelectedCustomerNumber}
      isJoint
    />
  );
}

export default PanelJointBankingInfoTransactionHistory;
