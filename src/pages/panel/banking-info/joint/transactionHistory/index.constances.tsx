import {
  PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS
} from "../../individual/transactionHistory/index.constances.tsx";
import {lazy} from "react";
const PanelJointTransactionHistoryEService = lazy(() => import(
  "./eService/PanelJointTransactionHistoryEService.tsx"
  ));
const PanelJointTransactionHistoryOnSite = lazy(() => import(
  "./onSite/PanelJointTransactionHistoryOnSite"
  ));

export const PANEL_JOINT_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT = {
  [PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.E_SERVICE]: (
    <PanelJointTransactionHistoryEService/>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.ON_SITE]: (
    <PanelJointTransactionHistoryOnSite/>
  ),
}
