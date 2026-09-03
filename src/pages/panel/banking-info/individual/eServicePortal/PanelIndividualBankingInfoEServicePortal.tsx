import PanelIndividualBankingInfoEServicePortalRender from "./PanelIndividualBankingInfoEServicePortalRender.tsx";
import useSelectedCustomerNumber from "./hooks/useSelectedCustomerNumber.ts";


function PanelIndividualBankingInfoEServicePortal() {

  const {
    selectedCustomerNumber, setSelectedCustomerNumber
  } = useSelectedCustomerNumber()

  return (
    <PanelIndividualBankingInfoEServicePortalRender
      selectedCustomerNumber={selectedCustomerNumber} setSelectedCustomerNumber={setSelectedCustomerNumber}
    />
  );
}

export default PanelIndividualBankingInfoEServicePortal;
