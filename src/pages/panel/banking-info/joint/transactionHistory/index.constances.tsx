import {
  PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS
} from "../../individual/transactionHistory/index.constances.tsx";
import {lazy} from "react";
const PanelJointTransactionHistoryEService = lazy(() => import(
  "./eService/PanelJointTransactionHistoryEService.tsx"
  ));
const PanelJointTransactionHistoryOnSiteMaxCount = lazy(() => import(
  "./onSiteMaxCount/PanelJointTransactionHistoryOnSiteMaxCount.tsx"
  ));
const PanelJointTransactionHistoryOnSiteMaxAmount = lazy(() => import(
  "./onSiteMaxAmount/PanelJointTransactionHistoryOnSiteMaxAmount.tsx"
  ));


export const PANEL_JOINT_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT = {
  [PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.E_SERVICE]: (
    <PanelJointTransactionHistoryEService/>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.ON_SITE_MAX_COUNT]: (
    <PanelJointTransactionHistoryOnSiteMaxCount/>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.ON_SITE_MAX_AMOUNT]: (
    <PanelJointTransactionHistoryOnSiteMaxAmount/>
  ),
}
