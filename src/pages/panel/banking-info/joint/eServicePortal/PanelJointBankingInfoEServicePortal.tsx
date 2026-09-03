import PanelIndividualBankingInfoEServicePortalRender
  from "../../individual/eServicePortal/PanelIndividualBankingInfoEServicePortalRender.tsx";
import useSelectedCustomerNumber from "../../individual/eServicePortal/hooks/useSelectedCustomerNumber.ts";

function PanelJointBankingInfoEServicePortal() {

  const {
    selectedCustomerNumber, setSelectedCustomerNumber
  } = useSelectedCustomerNumber()

  return (
    <PanelIndividualBankingInfoEServicePortalRender
      selectedCustomerNumber={selectedCustomerNumber} setSelectedCustomerNumber={setSelectedCustomerNumber}
      isJoint
    />
  );
}

export default PanelJointBankingInfoEServicePortal;
