import PanelTransactionHistoryEServiceRender
  from "../../../individual/transactionHistory/eService/PanelTransactionHistoryEServiceRender.tsx";
import type {
  EServicePortalSharedCustomerNumberFieldProps
} from "../../../individual/eServicePortal/EServicePortalSharedCustomerNumberField.tsx";

function PanelJointTransactionHistoryEService(
  props: Partial<Pick<EServicePortalSharedCustomerNumberFieldProps, 'selectedCustomerNumber'>>
) {
  return (
    <PanelTransactionHistoryEServiceRender
      isJoint
      {...props}
    />
  );
}

export default PanelJointTransactionHistoryEService;
