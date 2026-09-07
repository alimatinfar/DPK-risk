import PanelTransactionHistoryOnSite
  from "../../../individual/transactionHistory/onSite/PanelTransactionHistoryOnSite.tsx";
import type {
  EServicePortalSharedCustomerNumberFieldProps
} from "../../../individual/eServicePortal/EServicePortalSharedCustomerNumberField.tsx";


function PanelJointTransactionHistoryOnSite(
  props: Partial<Pick<EServicePortalSharedCustomerNumberFieldProps, 'selectedCustomerNumber'>>
) {
  return (
    <PanelTransactionHistoryOnSite
      isJoint
      {...props}
    />
  );
}

export default PanelJointTransactionHistoryOnSite;
