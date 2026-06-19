import usePanelIndividualBankingInfoEServicePortalRender
  from "../../individual/eServicePortal/hooks/usePanelIndividualBankingInfoEServicePortalRender.ts";
import PanelIndividualBankingInfoEServicePortalRender
  from "../../individual/eServicePortal/PanelIndividualBankingInfoEServicePortalRender.tsx";

function PanelJointBankingInfoEServicePortal() {

  const {
    selectedCustomerNumber, setSelectedCustomerNumber
  } = usePanelIndividualBankingInfoEServicePortalRender()

  return (
    <PanelIndividualBankingInfoEServicePortalRender
      selectedCustomerNumber={selectedCustomerNumber} setSelectedCustomerNumber={setSelectedCustomerNumber}
      isJoint
    />
  );
}

export default PanelJointBankingInfoEServicePortal;
