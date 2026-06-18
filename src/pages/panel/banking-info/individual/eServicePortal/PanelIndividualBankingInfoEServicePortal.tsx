import PanelIndividualBankingInfoEServicePortalRender from "./PanelIndividualBankingInfoEServicePortalRender.tsx";
import usePanelIndividualBankingInfoEServicePortalRender
  from "./hooks/usePanelIndividualBankingInfoEServicePortalRender.ts";


function PanelIndividualBankingInfoEServicePortal() {

  const {
    selectedCustomerNumber, setSelectedCustomerNumber
  } = usePanelIndividualBankingInfoEServicePortalRender()

  return (
    <PanelIndividualBankingInfoEServicePortalRender
      selectedCustomerNumber={selectedCustomerNumber} setSelectedCustomerNumber={setSelectedCustomerNumber}
    />
  );
}

export default PanelIndividualBankingInfoEServicePortal;
