import {
  PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS
} from "../../individual/transactionHistory/index.constances.tsx";
import {lazy} from "react";
import type {
  EServicePortalSharedCustomerNumberFieldProps
} from "../../individual/eServicePortal/EServicePortalSharedCustomerNumberField.tsx";
const PanelJointTransactionHistoryEService = lazy(() => import(
  "./eService/PanelJointTransactionHistoryEService.tsx"
  ));
const PanelJointTransactionHistoryOnSite = lazy(() => import(
  "./onSite/PanelJointTransactionHistoryOnSite"
  ));

export const PANEL_JOINT_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT = (
  props: Partial<Pick<EServicePortalSharedCustomerNumberFieldProps, 'selectedCustomerNumber'>>
) => ({
  [PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.E_SERVICE]: (
    <PanelJointTransactionHistoryEService {...props} />
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.ON_SITE]: (
    <PanelJointTransactionHistoryOnSite {...props} />
  ),
})
